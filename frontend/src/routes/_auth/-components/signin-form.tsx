import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { LoadingButton } from "@/components/loading-button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SigninData, SigninSchema } from "@/schemas/signin-schema";
import { useSignin } from "@/services/auth/use-signin";
import { useNavigate } from "@tanstack/react-router";
import { Switch } from "@/components/ui/switch";

export const SigninForm = () => {
    const { mutate, isPending, status } = useSignin();
    const navigate = useNavigate({ from: "/signin" });
    const [open, setOpen] = useState(false);

    const form = useForm<SigninData>({
        resolver: zodResolver(SigninSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const errors = form["formState"]["errors"];

    useEffect(() => {
        if (status === "success") {
            navigate({ to: "../" });
        }
    }, [status]);

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setOpen(true);
        }

        return () => {};
    }, [errors]);

    function onSubmit(values: SigninData) {
        mutate(values);
    }

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-[300px] space-y-1 md:space-y-4 lg:w-[400px]"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <h3 className="left-5 top-1 -translate-x-1 -translate-y-9 scroll-m-1 text-2xl font-semibold tracking-tight">
                                    Welcome Back!
                                </h3>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Please enter your email address"
                                        {...field}
                                        type="email"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Please enter your password"
                                        {...field}
                                        type="password"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="remember"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                <div className="space-y-0.5">
                                    <FormLabel>Remember Me</FormLabel>
                                </div>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <LoadingButton loading={isPending} type="submit">
                        Log In
                    </LoadingButton>
                </form>
            </Form>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Please correct following errors
                        </DialogTitle>

                        <DialogDescription className="space-y-2">
                            {Object.entries(errors).map(([key, value]) => (
                                <>
                                    {key === "email" && (
                                        <span>Email Address: </span>
                                    )}
                                    {key === "password" && (
                                        <span>Password: </span>
                                    )}
                                    <span key={key}>{value.message}</span>
                                    <br />
                                </>
                            ))}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
};
