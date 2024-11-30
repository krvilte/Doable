import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <aside className="flex w-16 gap-x-4 bg-gray-100 fixed top-0 left-0 z-40 lg:w-64 h-screen dark:bg-stone-900">
        <Sidebar />
      </aside>
      <main className="flex-1 bg-gray-50 ml-16 lg:ml-64 h-screen dark:bg-stone-700">
        <Outlet />
        {children}
      </main>
    </div>
  );
};

export default Layout;
