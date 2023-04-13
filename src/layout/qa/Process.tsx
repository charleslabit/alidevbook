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

export const Process = () => {
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
                            <Title order={1} id="process">
                                Old vs New Process
                            </Title>
                            <Table mt={30}>
                                <thead>
                                    <tr>
                                        <th>Criteria</th>
                                        <th>Old</th>
                                        <th>New</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td width="15%">
                                            <Text>Deployment</Text>
                                        </td>
                                        <td>
                                            <Text>
                                                We run e2e test locally and in browser mode that makes it really slow
                                                before deploying
                                            </Text>
                                        </td>

                                        <td>
                                            <Text>
                                                We run e2e test locally for testing only and build it to execute all
                                                test faster.
                                            </Text>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td width="15%">
                                            <Text>Continuous Integration</Text>
                                        </td>
                                        <td>
                                            <Text>Not implemented</Text>
                                        </td>
                                        <td>
                                            <Text>
                                                It is implemented now and it automatically builds and run its server for
                                                testing automatically inside pipeline. From almost 1 day to 15-20minutes
                                                testing
                                            </Text>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Text>Parallelization</Text>
                                        </td>
                                        <td>
                                            <Text>Not implemented</Text>
                                        </td>
                                        <td>
                                            <Text>It is implemented now, and it makes the test really fast.</Text>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Text>Adding Prerequisite</Text>
                                        </td>
                                        <td>
                                            <Text>No Prerequisite</Text>
                                        </td>
                                        <td>
                                            <Text>
                                                Why add Prequisite? Because we testing our test in parallel so we dont
                                                need to wait for some test to be true. <br />
                                                For example: <br />
                                                Create the feature name. <br />
                                                Update the feature name. <br />
                                                Since its parallel testing it executes at the same time so we dont need
                                                to rely on first test before updating.
                                            </Text>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Text>Test Tags</Text>
                                        </td>
                                        <td>
                                            <Text>
                                                Best practices of cypress is we need to add data-cy in the element.
                                            </Text>
                                        </td>
                                        <td>
                                            <Text>
                                                Playwright best practices and ease of use
                                                <br />
                                                page.getByRole button or row or cell and many more <br />
                                                page.getByLabel
                                                <br />
                                                page.getByPlaceHolder
                                                <br />
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
                            href="#process"
                            onClick={(e) => {
                                onClick(e, "process");
                            }}
                        >
                            <Text>Old vs New Process</Text>
                        </Anchor>
                    </div>
                </Grid.Col>
            </Grid>
        </>
    );
};
