import { Outlet } from "react-router-dom";
import Header from "../CommonRoute/Header";

const Layout = () => {
  return (
    <div className="max-w-[450px] min-h-screen mx-auto bg-[#E2126D] text-white p-3">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
