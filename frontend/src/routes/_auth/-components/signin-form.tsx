import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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

const SigninSchema = z
    .object({
        email: z.string().min(1, {message: "Please Enter Your Email"}).email().max(255),
        password: z.string().min(8).max(50),
    })
   

type SigninData = z.infer<typeof SigninSchema>;

export const SigninForm = () => {
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
        if (Object.keys(errors).length > 0) {
            setOpen(true);
        }

        return () => {};
    }, [errors]);

    function onSubmit(values: SigninData) {
        console.log(values);
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
                    <Button type="submit">
                        Log In
                    </Button>
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
