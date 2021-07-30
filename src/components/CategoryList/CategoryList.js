import { useEffect, useState } from "react";
import getProductsByCategory from "./../../backend/itemCategory";
import { Spinner } from "./../index";
import { ProductCard } from "./../ProductCard/ProductCard";
import "./CategroyList.scss";

export const CategoryList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { key } = category;

  useEffect(() => {
    setTimeout(() => {
      getProductsByCategory(key).then((result) => {
        setProducts(result);
        setLoading(false);
      });
    }, 2000);
  }, [key]);

  const product =
    products.length === 0 ? (
      <h3 className="CategoryList__h3">
        No se encuentran productos momentanemente
      </h3>
    ) : (
      products
        .map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })
        .slice(0, 4)
    );

  return loading ? (
    <Spinner />
  ) : (
    <div className="row justify-content-center">{product}</div>
  );
};
