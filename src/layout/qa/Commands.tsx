import React from "react";
import GetByLabel from "../../../assets/getByLabel.png";
import GetByPlaceHolder from "../../../assets/getByPlaceHolder.png";
import GetByText from "../../../assets/getByText.png";
import GetByRole from "../../../assets/getByRole.png";
import TestUsage from "../../../assets/test-usage.png";
import Assertions from "../../../assets/assertions.png";
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

export const Commands = () => {
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
                            <Title order={1} mb={10} id="commands">
                                Basic Terminal Commands
                            </Title>
                            <List>
                                <List.Item>
                                    yarn playwright codegen - Will open a new blank browser for element inspection and
                                    it records every event
                                </List.Item>
                                <List.Item>
                                    yarn playwright codegen http://localhost:3000/ - Will open localhost for element
                                    inspection
                                </List.Item>
                                <List.Item>yarn playwright test - run all test file</List.Item>
                                <List.Item>yarn playwright test tests/login - run test in specific folder</List.Item>
                                <List.Item>yarn playwright test tests/login/1-page - run specific test file</List.Item>

                                <List.Item>
                                    yarn playwright test login-page.spec.ts --headed - run test in headed mode. (
                                    playwright test by default running in headless browser ; a browser without user
                                    interface ) - headless can be true by default via playwright config
                                </List.Item>
                                <List.Item>
                                    yarn playwright test login-page.ts --project=chromium - run from different browser
                                </List.Item>
                                <List.Item>yarn playwright test login-page.ts --debug - run with debug tools</List.Item>
                            </List>
                        </Box>

                        <Box mt={30} id="test-commands">
                            <Title mb={10} order={1}>
                                Commonly Used Test Commands
                                <Anchor ml={10} href="https://playwright.dev/docs/api/class-test" target="_blank">
                                    More Commands here
                                </Anchor>
                            </Title>

                            <List>
                                <List.Item>test - Declares a test</List.Item>
                                <List.Item>test.describe - Declares a group of test</List.Item>
                                <List.Item>
                                    test.describe.configure{`({mode:'series' || 'parallel'})`} - Run in parallel or
                                    single mode
                                </List.Item>
                                <List.Item>test.beforeAll - run once before test</List.Item>
                                <List.Item>
                                    test.beforeEach - run every test and we used the authentication by sending the
                                    context of each test
                                </List.Item>
                                <List.Item>test.afterEach - run every after test </List.Item>
                                <List.Item>test.afterAll - run once after test</List.Item>
                            </List>
                            <Image mt={50} src={TestUsage} alt="Test" fit="cover" />
                        </Box>

                        <Box mt={30} id="page-commands">
                            <Title mb={10} order={1}>
                                Commonly Used Page Commands
                                <Anchor ml={10} href="https://playwright.dev/docs/api/class-page" target="_blank">
                                    More Commands here
                                </Anchor>
                            </Title>

                            <List>
                                <Stack>
                                    <List.Item>
                                        page.goto - go to the url <br />
                                        <Code>{`await page.goto('www.playwright.com')`}</Code>
                                    </List.Item>
                                    <List.Item>
                                        page.locator - many ways to select but im using it when getting the id <br />
                                        <Code>
                                            {`<div id="#Projects"></div>`} <br />
                                            {`await page.locator("#Projects)`}
                                        </Code>
                                    </List.Item>
                                    <List.Item>
                                        page.waitForResponse - wait for the mutation to finish sometimes it doesnt save
                                        due to speed of test
                                        <br />
                                        <Code>{`await page.waitForResponse((res) => res.status() === 200)`}</Code>
                                    </List.Item>
                                    <List.Item>
                                        page.setInputFiles - input files
                                        <br />
                                        <Code>{` await page.setInputFiles("input[type='file']", "tests/fixtures/sampleimage.png")`}</Code>
                                    </List.Item>
                                    <List.Item>
                                        click() - click the element
                                        <br />
                                        <Code> {`await page.locator("#Projects).click()`}</Code>
                                    </List.Item>
                                    <List.Item>
                                        fill() - input in text field
                                        <br />
                                        <Code> {`await page.getByPlaceholder('Username').fill('Random Text')`}</Code>
                                    </List.Item>

                                    <List.Item>
                                        press() - press key commands such as Enter , PageDown , PageUp and etc.
                                        <br />
                                        <Code> {`await page.getByRole('textbox').press('Backspace')`}</Code>
                                    </List.Item>

                                    <List.Item>
                                        first() - select the first element
                                        <br />
                                        <Code>
                                            {`<div>Hello</div>`} <br />
                                            {`<div>Hello</div>`} <br />
                                            {`await page.getByText('Hello)`} <br />
                                            selected the first div
                                        </Code>
                                    </List.Item>

                                    <List.Item>
                                        last() - select the last element
                                        <br />
                                        <Code>
                                            {`<div>Hello</div>`} <br />
                                            {`<div>Hello</div>`} <br />
                                            {`await page.getByText('Hello)`} <br />
                                            selected the last div
                                        </Code>
                                    </List.Item>

                                    <List.Item>
                                        nth() - select the element by index start with 0
                                        <br />
                                        <Code>
                                            {`<div>Hello</div>`} <br />
                                            {`<div>Hello</div>`} <br />
                                            {`await page.getByText('Hello).nth(1)`} <br />
                                            Selected the second div
                                        </Code>
                                    </List.Item>

                                    <List.Item>
                                        isVisible() - check if element is visible
                                        <br />
                                        <Code>
                                            {`<div>Hello</div>`} <br />
                                            {`<div>Hello</div>`} <br />
                                            {`await page.getByText('Hello).first().isVisible()`} <br />
                                            Check if the first div is visible
                                        </Code>
                                    </List.Item>

                                    <List.Item>
                                        isHidden() - check if element is hidden
                                        <br />
                                        <Code>
                                            {`<div>Hello</div>`} <br />
                                            {`<div>Hello</div>`} <br />
                                            {`await page.getByText('Hello).nth(3).isHidden()`} <br />
                                            Check if the 4th div with hello text is hidden
                                        </Code>
                                    </List.Item>
                                </Stack>
                                <Image mt={50} src={GetByText} alt="Test" fit="cover" />
                                <Image mt={50} src={GetByLabel} alt="Test" fit="cover" />
                                <Image mt={50} src={GetByPlaceHolder} alt="Test" fit="cover" />
                                <Image mt={50} src={GetByRole} alt="Test" fit="cover" />
                            </List>
                        </Box>

                        <Box mt={30} id="assertions">
                            <Title mb={10} order={1}>
                                Assertions
                                <Anchor ml={10} href="https://playwright.dev/docs/test-assertions" target="_blank">
                                    More Commands here
                                </Anchor>
                            </Title>
                            <Text>
                                {" "}
                                Playwright includes test assertions in the form of expect function. To make an
                                assertion, call expect(value) and choose a matcher that reflects the expectation. There
                                are many generic matchers like toEqual, toContain, toBeTruthy that can be used to assert
                                any conditions.
                            </Text>
                            <Image mt={50} src={Assertions} alt="Test" fit="cover" width={500} />
                        </Box>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={2}>
                    <div style={{ position: "fixed" }}>
                        <Text weight="bold">On this page</Text>
                        <Anchor
                            color="gray"
                            onClick={(e) => {
                                onClick(e, "commands");
                            }}
                        >
                            <Text>Terminal Commands</Text>
                        </Anchor>
                        <Anchor
                            color="gray"
                            onClick={(e) => {
                                onClick(e, "test-commands");
                            }}
                        >
                            <Text>Test Commands</Text>
                        </Anchor>

                        <Anchor
                            color="gray"
                            onClick={(e) => {
                                onClick(e, "page-commands");
                            }}
                        >
                            <Text>Page Commands</Text>
                        </Anchor>
                        <Anchor
                            color="gray"
                            onClick={(e) => {
                                onClick(e, "assertions");
                            }}
                        >
                            <Text>Assertions</Text>
                        </Anchor>
                    </div>
                </Grid.Col>
            </Grid>
        </>
    );
};
