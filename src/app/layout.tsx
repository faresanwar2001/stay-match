import { Outlet } from "react-router-dom";
import MenuSidebar from "./sidebar/menu-sidebar";

export default function HomeLayout() {
  return (
    <div className="flex h-screen items-start overflow-hidden">
      {/* Sidebar */}
      <div className="lg:block hidden">
        <MenuSidebar />
      </div>

      {/* Content */}
      <div className="w-full h-full flex-1 overflow-y-auto scrollbar-hide">
        {/* Heading dashboard */}
        <header className="bg-[#A7E92F] h-12 w-full flex items-center px-4">
          
        </header>

        <div className="ps-5  mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
