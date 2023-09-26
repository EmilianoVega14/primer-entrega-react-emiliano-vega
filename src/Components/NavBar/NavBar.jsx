import "./NavBar.css";
import { CardWidget } from "../CardWidget/CardWidget";

export const NavBar = () => {
  return (
    <div className="contenedorNavBar">
      <img src="/imagenes/logo-bm.jpg" alt="" />

      <div className="navBar_Items">
        <a href="">Productos</a>
        <a href="">Blog</a>
        <a href="">Contacto</a>
        <a href="">{<CardWidget />}</a>
      </div>
    </div>
  );
};
