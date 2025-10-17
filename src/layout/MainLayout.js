import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
export default function MainLayout() {
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsx("div", { className: "my-10", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
}
