import { createFileRoute } from "@tanstack/react-router";

import { FormWrapper } from "./-components/form-wrapper";
import { SigninForm } from "./-components/signin-form";

export const Route = createFileRoute("/_auth/signin")({
    component: Signup,
});

function Signup() {
    return (
        <FormWrapper>
            <div className="flex h-full w-full flex-row items-center justify-center">
                <SigninForm />
            </div>
        </FormWrapper>
    );
}
