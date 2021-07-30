import { useState, useEffect } from "react";
import { CategoryMenuItem } from "./../index";
import getCategory from "./../../backend/categories";
import "./CategoryMenu.scss";
import { CategoryList } from "./../CategoryList/CategoryList";

export const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const [tabs, setTabs] = useState();

  // Traer Array de Productos
  useEffect(() => {
    getCategory().then((result) => {
      setCategories(result);
      setTabs(result[0].id);
    });
  }, []);

  const handleActive = (id) => {
    setTabs(id);
  };

  const category = categories.map((category) => (
    <CategoryMenuItem
      key={category.id}
      category={category}
      onTabClicked={handleActive}
      isActive={tabs === category.id}
    />
  ));
  const categoryProducts = categories.map(
    (category) =>
      tabs === category.id && (
        <CategoryList category={category} key={category.id} />
      )
  );

  return (
    <div className="container CategoryMenu">
      <h2 className="CategoryMenu__title">Lo mejor para tu almuerzo/cena</h2>
      <div className="CategoryMenu__items ">{category}</div>
      <div className="container CategoryMenu__cards"> {categoryProducts}</div>
    </div>
  );
};
