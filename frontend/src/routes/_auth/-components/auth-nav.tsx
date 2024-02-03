import { Link } from "@tanstack/react-router";

import { BaseContainer } from "@/components/containers";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const AuthNav = () => {
    return (
        <header className="fixed left-0 top-0 z-10 w-screen p-3 pt-3 shadow-sm">
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
