import useAppContext from "../../context/useAppContext";
import { Button, Cart } from "./../index";
import "./CartList.scss";

export const CartList = ({ products }) => {
  const { totalPrice } = useAppContext();

  return (
    <div id="CartList" className="cart container">
      <div className="cart__titulos container">
        <h6 className="cart__titulos__text">Producto</h6>
        <h6 className="cart__titulos__text">Descripción</h6>
        <h6 className="cart__titulos__text">Cantidad</h6>
        <h6 className="cart__titulos__text">Precio</h6>
      </div>
      <div>
        {products.map((product, key) => (
          <Cart key={key} product={product} />
        ))}
      </div>
      <div className="cart__buyTotal container">
        <h5 className="cart__buyTotal__title ">
          Total
          <span className="cart__buyTotal__title--bold">${totalPrice()}</span>
        </h5>
        <Button
          path={"/checkout/"}
          className={"button__red"}
          content={"Comprar"}
        />
      </div>
    </div>
  );
};
