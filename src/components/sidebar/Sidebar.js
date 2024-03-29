import React, { useState ,useEffect} from "react";
import "./Sidebar.scss";
import { HiMenuAlt3 } from "react-icons/hi";
import menu from "../../data/sidebar";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";
import icn from "../../img/icon.png";

// const Sidebar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const toggle = () => setIsOpen(!isOpen);
//   const navigate = useNavigate();

//   const goHome = () => {
//     navigate("/");
//   };

//   return (
//     <div className="layout">
//       <div className="sidebar" style={{ width: isOpen ? "230px" : "60px" }}>
//         <div className="top_section">
//           <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
//             <img src={icn} alt="invt" 
//             className="inn"
//             style={{ cursor: "pointer" }}
//             onClick={goHome}
//              />
//           </div>

//           <div
//             className="bars"
//             style={{ marginLeft: isOpen ? "100px" : "0px" }}
//           >
//             <HiMenuAlt3 onClick={toggle} />
            
//           </div>
//         </div>
//         {menu.map((item, index) => {
//           return <SidebarItem key={index} item={item} isOpen={isOpen} />;
//         })}
//       </div>

//       <main
//         style={{
//           paddingLeft: isOpen ? "230px" : "60px",
//           transition: "all .5s",
//         }}
//       >
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Sidebar;

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const toggle = () => {
    if (window.innerWidth <= 720) {
      setIsOpen(false); // Close the sidebar when window width is less than or equal to 720
    } else {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 720) {
        setIsOpen(false); // Close the sidebar when window width is less than or equal to 720 on resize
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="layout">
      <div className="sidebar" style={{ width: isOpen ? "230px" : "60px" }}>
        <div className="top_section">
          <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
            <img
              src={icn}
              alt="invt"
              className="inn"
              style={{ cursor: "pointer" }}
              onClick={goHome}
            />
          </div>

          <div
            className="bars"
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
          >
            <HiMenuAlt3 onClick={toggle} className={window.innerWidth <= 720 ? 'inactive' : ''} />
          </div>
        </div>
        {menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </div>

      <main
        style={{
          paddingLeft: isOpen ? "230px" : "60px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
