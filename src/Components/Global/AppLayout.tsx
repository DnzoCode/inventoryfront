import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

function AppLayout({ children }) {
  const isOpen = useSelector((state) => state.sideBarStore.isOpen);

  return (
    <div className="w-screen h-screen overflow-auto bg-dark-global flex">
      <SideBar />
      <main
        className={`w-full h-full overflow-auto flex flex-col items-center`}
      >
        <NavBar />
        {children}
      </main>
    </div>
  );
}

export default AppLayout;
