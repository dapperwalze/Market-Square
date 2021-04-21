import "./categories.scss";
export const Categories = () => {
  return (
    <aside className="categories__section">
      <ul className="category__list">
        <li className="category__list__item">
          <a className="category_item_link" href="/">
            Electronics (12)
          </a>
        </li>
        <li className="category__list__item">
          <a className="category_item_link" href="/">
            Face Masks (3)
          </a>
        </li>
        <li className="category__list__item">
          <a className="category_item_link" href="/">
            Grocery (6)
          </a>
        </li>
        <li className="category__list__item">
          <a className="category_item_link" href="/">
            Fresh Food (8)
          </a>
        </li>
        <li className="category__list__item">
          <a className="category_item_link" href="/">
            Home (24)
          </a>
        </li>
        <li className="category__list__item">
          <a className="category_item_link" href="/">
            Kids (9)
          </a>
        </li>
        <li className="category__list__item">
          <a className="all__categories__link" href="/">
            View all categories
          </a>
        </li>
      </ul>
    </aside>
  );
};
