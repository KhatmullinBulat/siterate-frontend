import { HomePage } from "@/pages/Home";
import { NotFoundPage } from "@/pages/NotFound";
import RootLayout from "@/shared/layouts/RootLayout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "*",
                Component: NotFoundPage
            }
        ]
    }
])