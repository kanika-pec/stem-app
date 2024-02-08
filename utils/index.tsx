
import { EmotionCache } from '@emotion/react';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { AppType } from 'next/app';
import { EmotionCacheProviderProps, createEmotionCache } from '@attentive-platform/stem-ui';
import createEmotionServer from '@emotion/server/create-instance';

interface Plugin {
    enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType>>) => (props: any) => JSX.Element;
    resolveProps: (initialProps: DocumentInitialProps) => Promise<DocumentInitialProps>;
}

/**
 * A utility to compose multiple `getInitialProps` functions.
 */
export function createGetInitialProps(plugins: Plugin[]) {
    return async function getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => plugins.reduce((result, plugin) => plugin.enhanceApp(result), App)
            });

        const initialProps = await Document.getInitialProps(ctx);

        const finalProps = await plugins.reduce(
            async (result, plugin) => plugin.resolveProps(await result),
            Promise.resolve(initialProps)
        );

        return finalProps;
    };
}

export interface DocumentHeadTagsProps {
    emotionStyleTags: React.JSX.Element[];
}

export function DocumentHeadTags({ emotionStyleTags }: DocumentHeadTagsProps) {
    return (
        <>
            <meta name='emotion-insertion-point' content='' />
            {emotionStyleTags}
        </>
    );
}

export async function documentGetInitialProps(
    ctx: DocumentContext,
    options?: {
        emotionCache?: EmotionCache;
        plugins?: Plugin[];
    }
) {
    const cache = options?.emotionCache ?? createEmotionCache();

    return createGetInitialProps([
        {
            enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & EmotionCacheProviderProps>) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                },
            resolveProps: async props => {
                const { extractCriticalToChunks } = createEmotionServer(cache);
                const { styles } = extractCriticalToChunks(props.html);
                return {
                    ...props,
                    emotionStyleTags: styles.map(style => (
                        <style
                            data-emotion={`${style.key} ${style.ids.join(' ')}`}
                            key={style.key}
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: style.css }}
                        />
                    ))
                };
            }
        },
        ...(options?.plugins ?? [])
    ])(ctx) as Promise<DocumentInitialProps & DocumentHeadTagsProps>;
}
