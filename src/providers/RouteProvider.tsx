import { createBrowserRouter } from "react-router-dom";
import BaseView from "../views/BaseView";

/*Creating routes, I used router because I intend to have more than one view in the app, but since I ran out of time and I wanted
to dockerize and deploy the app November 20th, 2023 then by now this is the only path the app has*/
const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseView />,
    },
]);

export default router;
