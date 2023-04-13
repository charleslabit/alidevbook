import React from "react";
import GlobalSetup2 from "../../../assets/global-setup2.png";
import GlobalSetup1 from "../../../assets/global-setup1.png";
import Structure from "../../../assets/structure.png";
import Config1 from "../../../assets/config1.png";
import Config2 from "../../../assets/config2.png";
import { useRouter } from "next/router";
import {
    Accordion,
    Tabs,
    Text,
    Title,
    Mark,
    Stack,
    Table,
    Flex,
    Box,
    Anchor,
    Grid,
    Button,
    Navbar,
    Code,
    Image,
    List,
} from "@mantine/core";

export const Installation = () => {
    const onClick = (e: any, id: string) => {
        e.preventDefault();
        let element = document.getElementById(id);
        let container = document.getElementById("container");
        if (element && container) {
            window.scrollTo({ top: element.offsetTop - container.offsetTop, behavior: "smooth" });
        }
    };

    return (
        <>
            <Grid>
                <Grid.Col span="auto">
                    <Stack id="container">
                        <Box>
                            <Title order={1} id="installation">
                                Install playwright
                            </Title>
                            <Anchor href="https://playwright.dev/docs/intro" target="_blank">
                                Playwright documentation
                            </Anchor>
                        </Box>

                        <Box mt={30} id="global-setup">
                            <Title mb={10} order={1}>
                                Inside your project folder create global-setup.ts
                            </Title>
                            <List>
                                <List.Item>Setup your environment variables</List.Item>
                                <List.Item>Configure your Amplify</List.Item>
                                <List.Item>
                                    Inside globalSetup function sign in your user and admin and other roles
                                </List.Item>
                                <List.Item>Create the token key</List.Item>
                                <List.Item>Save inside json file</List.Item>
                                <Image mt={50} src={GlobalSetup1} alt="GlobalSetup" fit="cover" />
                                <Image mt={50} src={GlobalSetup2} alt="GlobalSetup" fit="cover" />
                            </List>
                        </Box>

                        <Box mt={50} id="playwright-config">
                            <Title mb={10} order={1}>
                                In playwright.config.ts you can setup your values conditionally if in CI or Local
                            </Title>
                            <List>
                                <List.Item>testDir: Test directory.</List.Item>
                                <List.Item>workers: Number of Test that will execute at the same time.</List.Item>
                                <List.Item>reporter: Testing output</List.Item>

                                <List.Item>globalSetup: Run once before the test</List.Item>

                                <List.Item>projects: Browser will be used</List.Item>

                                <List.Item>webServer: Run the server before the test it also useful in ci</List.Item>
                            </List>
                            <Image mt={50} src={Config1} alt="Config1" fit="cover" />
                            <Image mt={50} src={Config2} alt="Config2" fit="cover" />
                        </Box>

                        <Box mt={50}>
                            <Title order={1} id="structure">
                                Folder structure
                            </Title>
                            <Title mt={30} order={2}>
                                Inside tests folder create the following folder name:
                            </Title>
                            <List>
                                <List.Item>auth: for authentication</List.Item>
                                <List.Item>e2e: our test cases and run by name (top to bottom)</List.Item>
                                <List.Item>fixtures: our files to be import during test</List.Item>
                                <List.Item>utils: authentication and other utilities</List.Item>
                            </List>
                            <Image src={Structure} alt="structure" fit="contain" height={500} width={300} />
                        </Box>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={2}>
                    <div style={{ position: "fixed" }}>
                        <Text weight="bold">On this page</Text>
                        <Anchor
                            color="gray"
                            onClick={(e) => {
                                onClick(e, "installation");
                            }}
                        >
                            <Text>Installation</Text>
                        </Anchor>
                        <Anchor
                            color="gray"
                            onClick={(e) => {
                                onClick(e, "global-setup");
                            }}
                        >
                            <Text>Global Setup</Text>
                        </Anchor>

                        <Anchor
                            color="gray"
                            onClick={(e) => {
                                onClick(e, "playwright-config");
                            }}
                        >
                            <Text>Playwright Config</Text>
                        </Anchor>
                        <Anchor
                            color="gray"
                            onClick={(e) => {
                                onClick(e, "structure");
                            }}
                        >
                            <Text>Folder Structure</Text>
                        </Anchor>
                    </div>
                </Grid.Col>
            </Grid>
        </>
    );
};
