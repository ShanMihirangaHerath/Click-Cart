import { BookA, Boxes, FolderKanban, Inbox, PackageSearch, TicketCheck, UserRound } from "lucide-react"




export const SidebarItems = () => {
    return (
        <>
            <ul className="cursor-pointer">
                <li className=" mt-4">
                    <button className="flex flex-row w-full rounded-md px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <FolderKanban className=" w-6 h-6 mr-2" />
                        Overview
                    </button>
                </li>
                <li className="mt-4">
                    <button className="flex flex-row w-full rounded-md px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <BookA className=" w-6 h-6 mr-2" />
                        Orders
                    </button>
                </li>
                <li className="mt-4">
                    <button className="flex flex-row w-full rounded-md px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <PackageSearch className=" w-6 h-6 mr-2" />
                        Products
                    </button>
                </li>
                <li className="mt-4">
                    <button className="flex flex-row w-full rounded-md px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Boxes className=" w-6 h-6 mr-2" />
                        Categories
                    </button>
                </li>
                <li className="mt-4">
                    <button className="flex flex-row w-full rounded-md px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <UserRound className=" w-6 h-6 mr-2" />
                        Customers
                    </button>
                </li>
                <li className="mt-4">
                    <button className="flex flex-row w-full rounded-md px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <UserRound className=" w-6 h-6 mr-2" />
                        Reports
                    </button>
                </li>
                <li className="mt-4">
                    <button className=" flex flex-row w-full rounded-md px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <TicketCheck className=" w-6 h-6 mr-2" />
                        Coupons
                    </button>
                </li>
                <li className="mt-4">
                    <button className="flex flex-row w-full rounded-md px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Inbox className=" w-6 h-6 mr-2" />
                        Inbox
                    </button>
                </li>
            </ul>
        </>
    );
};
