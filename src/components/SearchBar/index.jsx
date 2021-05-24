import { IoIosSearch } from "react-icons/io";
import "./searchbar.scss";

export const SearchBar = (props) => {
  return (
    <div className="product__search__container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="search"
          className="product__search__field"
          placeholder="Search for products..."
          onChange={props.handleChange}
          value={props.value}
        ></input>
        <button type="submit" className="product__search__button">
          {" "}
          <span>
            <IoIosSearch
              className="product__search__icon"
              size={"1.5rem"}
              color={"#2766cc"}
            />
          </span>
        </button>
      </form>
    </div>
  );
};
