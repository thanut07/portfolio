// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import MainLayout from "../layout/MainLayout";
// import Detail from "../views/Detail";

const allRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        menuId: 0,
        path: "/",
        name: "home",
        parentPath: "/",
        element: <Home />,
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
