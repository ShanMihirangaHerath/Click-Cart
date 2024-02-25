import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SidebarItems } from "./dashboard/-components/sidebar-items";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useAuthStore } from "@/store/auth";



export const Route = createFileRoute("/dashboard")({
    component: DashboardLayout,
});



function DashboardLayout() {
    const { user } = useAuthStore();

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handleOnClick = () => {
        setIsSideBarOpen(!isSideBarOpen);
 

    };
    return (
        <div >
            <div className="flex w-full flex-row justify-between  bg-slate-300 dark:bg-gray-900 p-4">
                
                <Logo/>
                <div className="flex flex-row gap-4">
                <span className="flex flex-row">
                    Hello, {user.firstName}
                </span>
                <ModeToggle/>
                </div>
                
                <Button onClick={handleOnClick} className="md:hidden">
                    Close
                </Button>
            </div>
            <div className="flex min-h-screen flex-col md:flex-row">
                <div
                    className={cn("md:w-56", "md:block", isSideBarOpen ? "h-full" : "hidden")}
                >
                    <div className="p-4">
                        <ScrollArea className="flex h-[450px] rounded-md border p-4">
                            <div className="flex flex-col items-center gap-4">
                                <SidebarItems />
                            </div>
                        </ScrollArea>
                        <button className="flex w-full items-center justify-center mt-32 hover:bg-slate-100 dark:hover:bg-gray-600 rounded-md p-2">
                            Settings
                        </button>
                        <button className="flex w-full items-center justify-center mt-2 hover:bg-slate-100 dark:hover:bg-gray-600 rounded-md p-2">
                            Help
                        </button>
                        <button className="flex w-full items-center justify-center mt-2 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-md p-2">
                            Sign Out
                        </button>
                    </div>
                </div>
                <div className="dark:bg-slate-900 bg-slate-100 flex-1 flex-row">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
