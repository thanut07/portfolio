
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "../routers/Index";

function RenderRoutes() {
  const element = useRoutes(routes);
  return element;
}

export default function ManageRoutes() {
  return (
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>
  );
}