import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "@tanstack/react-router";
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
import { SignupData, SignupSchema } from "@/schemas/signup-schema";
import { useSignup } from "@/services/auth";
import { LoadingButton } from "@/components/loading-button";

export const SignupForm = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate({ from: "/signup" });
    const { mutate, isPending, status } = useSignup();

    const form = useForm<SignupData>({
        resolver: zodResolver(SignupSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    useEffect(() => {
        if (status === "success") {
            navigate({ to: "../" });
        }
    }, [status]);

    const errors = form["formState"]["errors"];

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setOpen(true);
        }
    }, [errors]);

    function onSubmit(values: SignupData) {
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
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Please enter your first name"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Please enter your last name"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
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
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Retype password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Retype your password"
                                        {...field}
                                        type="password"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <LoadingButton loading={isPending} type="submit">
                        Submit
                    </LoadingButton>
                    <Link to="/signin">
                        <div className="absolute text-sm font-medium text-gray-500 hover:text-red-600 top-[450px] left-80">
                            If you already have an account?
                        </div>
                    </Link>
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
                                    {key === "firstName" && (
                                        <span>First Name: </span>
                                    )}
                                    {key === "lastName" && (
                                        <span>Last Name: </span>
                                    )}
                                    {key === "email" && (
                                        <span>Email Address: </span>
                                    )}
                                    {key === "password" && (
                                        <span>Password: </span>
                                    )}
                                    {key === "confirmPassword" && (
                                        <span>Confirm Password: </span>
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
