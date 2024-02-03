import { BaseContainer } from "@/components/containers/base-container";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";

export const AuthNav = () => {
    return (
        <header className="p-3 pt-3 shadow-sm dark:border-slate-800 fixed top-0 left-0 z-10 w-screen">
            <BaseContainer>
                <div className="flex flex-row items-center justify-between">
                    <Logo />
                    <div className="flex flex-row gap-4">
                        <Link to="/">
                            <Button className="rounded-md">Login</Button>
                        </Link>
                    </div>
                </div>
            </BaseContainer>
        </header>
    );
};
