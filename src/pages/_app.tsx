import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import AppLayout from "@web/layouts/appLayout";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalsProvider } from "@mantine/modals";
import { NavigationProgress } from "@mantine/nprogress";
import { Notifications } from "@mantine/notifications";
import { SpotlightProvider } from "@mantine/spotlight";
import NextProgress from "next-progress";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Telegram Webapp bot services</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
}
