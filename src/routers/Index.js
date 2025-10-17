import allRoutes from "./allRoutes";
const routes = [
    ...allRoutes.map((route) => ({ subSystemId: 0, ...route })),
];
export default routes;
