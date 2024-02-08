// import { DocumentHeadTags, DocumentHeadTagsProps, documentGetInitialProps } from "@/utils";
import {
  DocumentHeadTagsProps,
  DocumentHeadTags,
  createEmotionCache,
  documentGetInitialProps,
} from "@attentive-platform/stem-ui";
import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps,
} from "next/document";

export default function MyDocument(
  props: DocumentProps & DocumentHeadTagsProps
) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
        {/* <meta name="emotion-insertion-point" content="" /> */}
        {/* {props.emotionStyleTags} */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx, {
    emotionCache: createEmotionCache(),
  });
  return finalProps;
};

