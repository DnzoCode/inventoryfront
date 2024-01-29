import { Avatar } from "primereact/avatar";
import { ContextMenu } from "primereact/contextmenu";
import { Menubar } from "primereact/menubar";
import { useRef } from "react";
import { BiHome } from "react-icons/bi";
import { useSelector } from "react-redux";

function NavBar() {
  const cm = useRef(null);
  const itemsContext = [
    { label: "Copy", icon: <BiHome /> },
    { label: "Rename", icon: <BiHome /> },
  ];
  const items = [
    {
      label: "Home",
      icon: <BiHome />,
    },
    {
      label: "Features",
      icon: <BiHome />,
    },
  ];
  return (
    <>
      <div className="w-full flex justify-center items-center p-4">
        <Menubar
          model={items}
          className="w-11/12 backdrop-blur-md bg-dark-global bg-opacity-10 border-0"
          end={
            <>
              <Avatar
                image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                shape="circle"
                onContextMenu={(e) => cm.current.show(e)}
              />
              <ContextMenu model={itemsContext} ref={cm} breakpoint="767px" />
            </>
          }
        />
      </div>
    </>
  );
}

export default NavBar;
