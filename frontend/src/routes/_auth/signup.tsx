import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/signup")({
    component: Signup,
});

function Signup() {
    return (
        <>
            <div className="h-[500px] lg:h-[500px] w-[250px] lg:w-[450px] rounded-lg bg-white opacity-50 blur-sm"></div>
            <div className="absolute left-1/2 top-1/2 z-30">
                
            </div>
        </>
    );
}
