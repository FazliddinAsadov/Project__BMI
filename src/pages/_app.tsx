import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";
import { SpotlightProvider } from "@mantine/spotlight";
import AppLayout from "@web/layouts/appLayout";
import NextProgress from "next-progress";
import { AppProps } from "next/app";
import Head from "next/head";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Project</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}
      >
        <SpotlightProvider actions={[]}>
          <Notifications />
          <NavigationProgress />
          <ModalsProvider>
            <NextProgress delay={300} options={{ showSpinner: false }} />
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </ModalsProvider>
        </SpotlightProvider>
      </MantineProvider>
    </>
  );
}
