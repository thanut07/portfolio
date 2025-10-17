import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "../routers/Index";
function RenderRoutes() {
    const element = useRoutes(routes);
    return element;
}
export default function ManageRoutes() {
    return (_jsx(BrowserRouter, { children: _jsx(RenderRoutes, {}) }));
}
