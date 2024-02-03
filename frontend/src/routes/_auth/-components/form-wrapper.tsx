import { ReactNode } from "react";

type FormWrapperProps = {
    children: ReactNode;
};

export const FormWrapper = ({ children }: FormWrapperProps) => {
    return (
        <>
            {/* <div className="h-[500px] w-[250px] rounded-lg bg-white opacity-50 blur-sm lg:h-[500px] lg:w-[450px]"></div> */}
            {/* <div className="absolute left-1/2 top-1/2 z-30">{children}</div> */}

            <div className="h-full w-full rounded-lg bg-black opacity-50 blur-sm"></div>
            <div className="absolute left-1/2 top-1/2 z-30 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-black md:p-6">
                {children}
            </div>
        </>
    );
};
