import { Link, ToPathOption } from "@tanstack/react-router";

export const Logo = ({ to = "/" }: ToPathOption) => {
    return (
        <Link to={to}>
            <div className="flex items-center gap-x-4 transition hover:opacity-75">
                <div className="block">
                    <p className="text-lg font-semibold">Click-Cart</p>
                    <p className="text-sm text-muted-foreground">
                        Let&apos;s buy
                    </p>
                </div>
            </div>
        </Link>
    );
}; 