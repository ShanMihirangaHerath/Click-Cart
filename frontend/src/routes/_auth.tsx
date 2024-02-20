import { Outlet, createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { useTheme } from "@/components/theme-provider";

import video from "@/assets/Videos/signin.mp4";

export const Route = createFileRoute("/_auth")({
    component: AuthLayout,
});

function AuthLayout() {
    const { setTheme } = useTheme();
    useEffect(() => {
        setTheme("dark");
    }, []);

    return (
        <>
            <div className="relative">
                <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    className="h-screen w-full object-cover"
                ></video>
            </div>
            <div className="absolute left-24 top-1/2 hidden -translate-y-1/2 md:block">
                <h1 className="text-2xl lg:text-4xl">Welcome To Click-Cart</h1>
                <p className="w-80 lg:w-[400px]">
                    "Welcome to Click-Cart! Your go-to destination for online
                    shopping. Discover a wide range of products with ease. Log
                    in for exclusive deals and seamless checkout. Happy
                    shopping!"
                </p>
            </div>
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 p-4 md:left-2/3 md:-translate-x-1/3 ">
                {/* <div className="relative h-[650px] w-[400px] lg:w-[450px]"> */}
                <div className="relative h-[500px] w-[90vw] md:w-[40vw]">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
