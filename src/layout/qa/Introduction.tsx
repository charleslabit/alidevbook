import React from "react";
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
} from "@mantine/core";

export const Introduction = () => {
    const router = useRouter();

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
                            <Title order={1} id="overview">
                                Playwright Automation Tool
                            </Title>
                            <Text>
                                The Playwright is an automation tool from Microsoft for reliable end-to-end testing for
                                modern web apps. The Playwright is a perfect rival against Selenium. The top two
                                contributors of Playwright are the same ones who created the Puppeteer; Puppeteer is an
                                open-source node-js-based framework built by Google.
                            </Text>
                        </Box>
                        <Box mt={30}>
                            <Stack>
                                <Title order={2} mt={10} mb={10} id="why-playwright">
                                    Why Playwright?
                                </Title>
                                <Box>
                                    <Title order={4}>Accuracy and High Speed</Title>
                                    <Text>- Playwright is faster and more accurate.</Text>
                                </Box>

                                <Box>
                                    <Title order={4}>Parallelism and sharding</Title>
                                    <Text>
                                        - Playwright runs tests in parallel. In order to achieve parallelism, it runs
                                        several worker processes together. Playwright Test can shard a test suite, so
                                        that it can be executed on multiple machines.
                                    </Text>
                                </Box>

                                <Box>
                                    <Title order={4}>Headless</Title>
                                    <Text>- Playwright supports both Headless and headed mode.</Text>
                                </Box>

                                <Box>
                                    <Title order={4}>One Time Login</Title>
                                    <Text>
                                        - Playwright enables the login of cookies inside a context once and retains the
                                        session data. This can restrict repetitive login operations of each test.
                                    </Text>
                                </Box>

                                <Box>
                                    <Title order={4}>Multiple Users</Title>
                                    <Text>
                                        - Sometimes, you have more than one signed-in user in your end-to-end tests. You
                                        can achieve that via logging in for these users multiple times in a global setup
                                        configuration and saving that state into different files.
                                    </Text>
                                </Box>

                                <Box>
                                    <Title order={4}>Events</Title>
                                    <Text>
                                        - Playwright allows listening to different events on the web page, including
                                        network requests, creation of child pages, dedicated workers, download,etc.
                                    </Text>
                                </Box>

                                <Box>
                                    <Title order={4}>Inspector</Title>
                                    <Text>- It can inspect page. Generate selectors explore execution logs.</Text>
                                </Box>

                                <Box id="ci">
                                    <Title order={4}>CI/CD Tools & Docker Support</Title>
                                    <Text>
                                        - CI/CD servers such as Jenkins, CircleCI, Azure Pipeline, TravisCI, Bitbucket,
                                        etc.
                                    </Text>
                                </Box>
                            </Stack>
                        </Box>
                        <Box mt={30} mb={30} id="playwright-vs-cypress">
                            <Title order={1}>Playwright vs Cypress</Title>
                            <Text mt={10}>
                                The newest addition to Automation Framework, Playwright from Microsoft, has arrived as a
                                solid competitor to Cypress. The Playwright did initial release in 2020; it has come up
                                with many features and overcome almost all tradeoffs that Cypress had. Let’s compare
                                Playwright and Cypress to understand when to use what.
                            </Text>

                            <Table>
                                <thead>
                                    <tr>
                                        <th>Criteria</th>
                                        <th>Playwright</th>
                                        <th>Cypress</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td width="15%">
                                            <Text>Speed</Text>
                                        </td>
                                        <td>
                                            <Text>
                                                Playwright is much faster than cypress. Some of the references.
                                                <Anchor
                                                    ml={5}
                                                    href="https://mtlynch.io/notes/cypress-vs-playwright/#playwright-is-significantly-faster-than-cypress"
                                                    target="_blank"
                                                >
                                                    Sample 1
                                                </Anchor>
                                                <Anchor
                                                    ml={5}
                                                    href="https://www.reddit.com/r/reactjs/comments/spu8cm/playwright_vs_cypress/"
                                                    target="_blank"
                                                >
                                                    Sample 2
                                                </Anchor>
                                            </Text>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td width="15%">
                                            <Text>Setup</Text>
                                        </td>
                                        <td>
                                            <Text>
                                                The Playwright does not define any folder structure, and you can
                                                configure it with the Test runner of your choice.
                                            </Text>
                                        </td>
                                        <td>
                                            <Text>
                                                Cypress is easy to install and configure and has a pre-defined folder
                                                structure. It&#39;s a complete package that comes bundled with its own
                                                test runner.
                                            </Text>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Text>Parallelization</Text>
                                        </td>
                                        <td>
                                            <Text>
                                                The Playwright fully supports parallelization, even locally. Also,
                                                Playwright supports parallel tests within a single test file, and you
                                                can run tests on multiple browsers simultaneously.
                                            </Text>
                                        </td>
                                        <td>
                                            <Text>
                                                In Cypress, it is costly to implement parallelization. Also, to run
                                                Cypress tests in parallel, you need to split them across files, and you
                                                cannot run tests against multiple browsers at the same time.
                                            </Text>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Text>Cost</Text>
                                        </td>
                                        <td>
                                            <Text>The Playwright is an entirely open-source and free-to-use tool.</Text>
                                        </td>
                                        <td>
                                            <Text>
                                                Cypress is a free-to-use automation tool, but the Cypress dashboard is
                                                not entirely Free. This package is limited to 3 users and does not have
                                                features like Run failed specs first and canceling run on failure. It
                                                does not provide integration with Jira, Github, and GitLab Enterprise.
                                                Also, Flaky test detection and analytics features are not in the free
                                                edition.
                                            </Text>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Box>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={2}>
                    <div style={{ position: "fixed" }}>
                        <Text weight="bold">On this page</Text>
                        <Anchor
                            color="gray"
                            href="#overview"
                            onClick={(e) => {
                                onClick(e, "overview");
                            }}
                        >
                            <Text>Overview</Text>
                        </Anchor>
                        <Anchor
                            color="gray"
                            href="#why-playwright"
                            onClick={(e) => {
                                onClick(e, "why-playwright");
                            }}
                        >
                            <Text>Why Playwright?</Text>
                        </Anchor>

                        <Anchor
                            color="gray"
                            href="#playwright-vs-cypress"
                            onClick={(e) => {
                                onClick(e, "playwright-vs-cypress");
                            }}
                        >
                            <Text>Playwright vs Cypress</Text>
                        </Anchor>
                    </div>
                </Grid.Col>
            </Grid>
        </>
    );
};
