import "./CategoryMenuItem.scss";

export const CategoryMenuItem = ({ category, onTabClicked, isActive }) => {
  const handleCategory = (id) => {
    onTabClicked(id);
  };
  const classActive = isActive
    ? "CategoryMenuItem__btn CategoryMenuItem__btn--active"
    : "CategoryMenuItem__btn";
  return (
    <>
      <button
        className={classActive}
        onClick={() => handleCategory(category.id)}>
        {category.description}
      </button>
    </>
  );
};
