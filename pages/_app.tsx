import "@/styles/globals.css";
import { AppCacheProvider, StyleProvider } from "@attentive-platform/stem-ui";
import type { AppProps } from "next/app";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <StyleProvider {...props}>
        <Component {...pageProps} />
      </StyleProvider>
    </AppCacheProvider>
  );
}
