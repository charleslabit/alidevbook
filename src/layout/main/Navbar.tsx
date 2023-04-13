import { Navbar as MNavbar, Accordion, ScrollArea } from "@mantine/core";
import { useRouter } from "next/router";

export const Navbar = () => {
    const router = useRouter();

    const onClick = (target: string) => {
        router.push(target);
    };

    const NavBarItems = () => (
        <Accordion defaultValue="getting-started">
            <Accordion.Item value="getting-started">
                <Accordion.Control>Quality Assurance</Accordion.Control>
                <Accordion.Panel
                    ml={5}
                    onClick={() => {
                        onClick("/qa/introduction");
                    }}
                >
                    Introduction
                </Accordion.Panel>
                <Accordion.Panel
                    ml={5}
                    onClick={() => {
                        onClick("/qa/process");
                    }}
                >
                    Old vs New Process
                </Accordion.Panel>

                <Accordion.Panel
                    ml={5}
                    onClick={() => {
                        onClick("/qa/installation");
                    }}
                >
                    Installation
                </Accordion.Panel>

                <Accordion.Panel
                    ml={5}
                    onClick={() => {
                        onClick("/qa/commands");
                    }}
                >
                    Basic Commands
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
    return (
        <MNavbar width={{ base: 250 }}>
            <MNavbar.Section grow component={ScrollArea} mt={25}>
                <div style={{ cursor: "pointer" }}>
                    <NavBarItems />
                </div>
            </MNavbar.Section>
        </MNavbar>
    );
};
