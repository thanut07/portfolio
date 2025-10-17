import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className="my-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
