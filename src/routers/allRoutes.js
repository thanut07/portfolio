import { jsx as _jsx } from "react/jsx-runtime";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import MainLayout from "../layout/MainLayout";
// import Detail from "../views/Detail";
const allRoutes = [
    {
        path: "/",
        element: _jsx(MainLayout, {}),
        children: [
            {
                menuId: 0,
                path: "/",
                name: "home",
                parentPath: "/",
                element: _jsx(Home, {}),
            },
            // {
            //   menuId: 1,
            //   path: "/detail/:id",
            //   name: "detail",
            //   parentPath: "/",
            //   element: <Detail />,
            // },
        ],
    },
];
export default allRoutes;
