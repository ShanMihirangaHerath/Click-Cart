import { ThemeProvider } from "@/components/theme-provider";
import { queryClient } from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";
import { Toaster } from "sonner";

const TanStackRouterDevtools =
    process.env.NODE_ENV === "production"
        ? () => null
        : React.lazy(() =>
              import("@tanstack/router-devtools").then((res) => ({
                  default: res.TanStackRouterDevtools,
              })),
          );

export const Route = createRootRoute({
    component: () => (
        <>
            <QueryClientProvider client={queryClient}>
                <Toaster richColors position="bottom-center" />
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <Outlet />
                </ThemeProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
            <Suspense fallback={<div>Loading</div>}>
                <TanStackRouterDevtools />
            </Suspense>
        </>
    ),
});
