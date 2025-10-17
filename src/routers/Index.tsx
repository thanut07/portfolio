import type { RouteObject } from "react-router-dom";
import allRoutes from "./allRoutes";

const routes: RouteObject[] = [
  ...allRoutes.map((route) => ({ subSystemId: 0, ...route })),
];

export default routes;
