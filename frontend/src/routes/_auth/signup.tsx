import { createFileRoute } from "@tanstack/react-router";

import { FormWrapper } from "./-components/form-wrapper";
import { SignupForm } from "./-components/signup-form";

export const Route = createFileRoute("/_auth/signup")({
    component: Signup,
});

function Signup() {
    return (
        <FormWrapper>
            <div className="flex h-full w-full flex-row items-center justify-center">
                <SignupForm />
            </div>
        </FormWrapper>
    );
}
