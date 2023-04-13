import React from "react";
import { Loader, Title } from "@mantine/core";

export const LoadingAnimation = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <div style={{ display: "flex" }}>
                <Title order={2} color="orange">
                    Loading
                </Title>
                <Loader mt={15} ml={5} variant="dots" size={48} color="orange" />
            </div>
        </div>
    );
};
