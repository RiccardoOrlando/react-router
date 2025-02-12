import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div class="grid grid-cols-3 gap-4 bg-[#423736] bg-no-repeat bg-cover container-header">
        <div className="nav-left flex justify-center items-center">
          <ul className="flex gap-x-5 text-white w-auto md:text-sm">
            <li>
              <NavLink to={"/"}>HOMEPAGE</NavLink>
            </li>
            <li>
              <NavLink to={"/Chi Siamo"}>CHI SIAMO</NavLink>
            </li>
            <li>
              <NavLink to={"/OurTypicProduct"}>MENU</NavLink>
            </li>
            <li>
              <NavLink to={"/Shop"}>SHOP</NavLink>
            </li>
          </ul>
        </div>
          <div className=" flex justify-center items-center">
            <img src="../img/logo ciccios.png" alt="" className="w-24 h-auto" />
          </div>
        <div className="nav-right flex justify-center items-center">
          <ul className="flex gap-x-5 text-white w-auto md:text-sm">
            <li>
              <NavLink to={"/Contact"}>CONTATTI</NavLink>
            </li>
            <li>
              <NavLink to={"/Login"}>LOGIN</NavLink>
            </li>
            <li>
              <NavLink to={"/Cart"}>CARRELLO</NavLink>
            </li>
            <li>
              <NavLink to={"/Cart"}>CARRELLO</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
