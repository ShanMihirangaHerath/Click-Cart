import { z } from "zod";

export const SigninSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    remember: z.boolean(),
});

export type SigninData = z.infer<typeof SigninSchema>;
