import { HomePage } from "@/pages/Home";
import { LoginPage } from "@/pages/Login";
import { NotFoundPage } from "@/pages/NotFound";
import { RegisterPage } from "@/pages/Register";
import RootLayout from "@/layouts/RootLayout";
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
        ],
    },
    {
        path: "/auth",
        children: [
            {
                path: "login",
                Component: LoginPage,
            },
            {
                path: "register",
                Component: RegisterPage,
            }
        ]
    }
])