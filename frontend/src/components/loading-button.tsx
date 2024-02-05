import { Button, ButtonProps } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

interface LoadingButtonProps extends ButtonProps {
    loading: boolean;
}

export default function LoadingButton({
    children,
    loading,
    ...props
}: LoadingButtonProps) {
    return (
        <Button {...props} disabled={loading}>
            {children}
            {loading && <ReloadIcon className="ml-4 animate-spin" />}
        </Button>
    );
}
