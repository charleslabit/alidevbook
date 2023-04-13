import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { LoadingAnimation } from "@/module/LoadingAnimation";

export const Main = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/qa/introduction");
    });
    return <LoadingAnimation />;
};
