import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>LOGO</h1>
      <ul>
        <li>
            <NavLink to={"/"}>HomePage</NavLink>
        </li>
        <li>
            <NavLink to={"/Chi Siamo"}>Chi siamo</NavLink>
        </li>
        <li>
            <NavLink to={"/OurTypicProduct"}>OurTypicProduct</NavLink>
        </li>
        <li>
            <NavLink to={"/Shop"}>Shop</NavLink>
        </li>
      </ul>
    </>
  );
}
