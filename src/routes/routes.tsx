import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/appLayout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <AppLayout />,
  },
]);