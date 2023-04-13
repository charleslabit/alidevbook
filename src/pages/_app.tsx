import type { AppProps } from "next/app";
import { MantineProvider, AppShell, Header, Group, Title, Text, ScrollArea, Accordion } from "@mantine/core";
import { Navbar } from "@/layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: "dark",
            }}
        >
            <AppShell
                padding="lg"
                header={
                    <Header p={25} height={90}>
                        <Group position="apart">
                            <Title>
                                ALI Dev <span style={{ color: "orange" }}>Book</span>
                            </Title>
                        </Group>
                    </Header>
                }
                navbar={<Navbar />}
            >
                <Component {...pageProps} />
            </AppShell>
        </MantineProvider>
    );
}
