import { NavLink } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
// import Button from "../Button/Button";
import "./Footer.scss";
import Logo from "../../assets/images/Logo-LaMamma1.png";

export const Footer = () => {
  return (
    <div className="footer ">
      <div className="container footer__container">
        <div>
          <img src={Logo} alt="logo-lamamma-pedidos" className="footer__logo" />
        </div>
        <div className="footer__datos">
          <p>Restaurante La Mamma</p>
          <p>(0351) 4219191</p>
          <p>pedidos@lamammarestaurante.com.ar</p>
        </div>
        <div className="footer__rrss">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  );
};
