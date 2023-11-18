import { createBrowserRouter } from "react-router-dom";
import BaseView from "../views/BaseView";
import LoginView from "../views/LoginView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseView />,
    },
    {
        path: "login",
        element: <LoginView />,
    },
]);

export default router;
