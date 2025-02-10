import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div class="@container bg-[url(../img/fotoHero.jpg)] bg-no-repeat bg-cover container-header">
        <div class="flex flex-row justify-between items-center">
          <div className="nav-left">
            <ul className="flex gap-x-5 text-white">
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
          <div className="logo">
            <img
              className="header-logo"
              src="../img/pasticceria-logo.svg"
              alt=""
            />
          </div>
          <div className="nav-right">
            <button>🛒</button>
            <button className=" bg-green-600 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-300 ...">
              BOOK A TABLE
            </button>
          </div>
        </div>
        <div class="grid grid-flow-col">
          <div class="row-span-3 ... flex justify-start"><img src="../img/foto-panino-ciccios.png" alt="" /></div>
          <div class="col-span-2 ... flex justify-start text-4xl items-center text-white">BURGER LOVE STORY</div>
          <div class="col-span-2 row-span-2 ... flex justify-start ">03</div>
        </div>
      </div>
    </>
  );
}
