import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openOrCloseSidebar } from "../../Stores/Global/useSideBarStore";
import { Button } from "primereact/button";
function SideBar() {
  const isOpen = useSelector((state) => state.sideBarStore.isOpen);
  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    dispatch(openOrCloseSidebar());
  };
  return (
    <>
      <div
        className={`${
          isOpen ? "w-[20rem]" : "w-[6rem]"
        } h-full overflow-auto bg-white flex flex-col items-center transition-all`}
      >
        <Button label="Cerrar o abrir" onClick={handleOpenSidebar} />
        <h1>Sidebar</h1>
      </div>
    </>
  );
}

export default SideBar;
