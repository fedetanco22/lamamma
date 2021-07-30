import { NavLink } from "react-router-dom";
import useAppContext from "../../context/useAppContext";
import { BiShoppingBag } from "react-icons/bi";
import "./CartIcon.scss";

export const CartIcon = ({ numberActive, iconActive }) => {
  const { productsQuantity } = useAppContext();

  return (
    <div id="CartIcon" className="shopCart">
      <NavLink to="/cart/">
        <div className="shopCart__list">
          <BiShoppingBag className={`icons ${iconActive}`} />
          <div className={`shopCart__number ${numberActive}`}>
            <span className="shopCart__number--span ">
              {productsQuantity()}
            </span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
