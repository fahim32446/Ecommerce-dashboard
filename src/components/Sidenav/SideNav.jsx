import { useState } from "react";
import { NavLink  } from "react-router-dom";
import Dashboard from '../../assets/dashboard.svg'
import Product from '../../assets/product-svg.svg'
import Control from '../../assets/control.png'


const SideNav = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { id: 0, title: "Dashboard", src: Dashboard },
    { id: 1, title: "Products", src: Product },
  ];

  return (
    <div
      className={` ${
        open ? "w-[180px]" : "w-14 "
      } bg-white h-[900px] p-2 pt-8 relative transition duration-200`}
    >
      <img
        src={Control}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/logo.png"
          className={`w-8 cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-dark origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Admin
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <NavLink
            to={`/${Menu.title.toLowerCase()}`}
            key={index}
            activeclassName="active"
            className="flex duration-200 transition rounded-md p-2 cursor-pointer hover:bg-blue-400 hover:text-white text-dark font-semibold text-sm items-center gap-x-4 mt-2"
          >
            <img className="w-8 " src={Menu.src} />
            <span className={`${!open && "hidden"} origin-left duration-200 transition`}>
              {Menu.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
