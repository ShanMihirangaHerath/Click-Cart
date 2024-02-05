import { axiosClient } from "@/lib/axios-client";
import { SigninData } from "@/schemas/signin-schema";
import { UserData, useAuthStore } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const useSignin = () => {
    const { setUser } = useAuthStore();
    return useMutation({
        mutationFn: async (data: SigninData) => {
            const response = await axiosClient.post("auth/signin", data);
            return response.data.data as UserData;
        },
        onSuccess: (data) => {
            setUser(data);
            toast.success("Welcome back!");
        },
        onError: (error) => {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong!");
            }
        },
    });
};
