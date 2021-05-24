import "./productcounttoggle.scss";
export const ProductCountToggle = (props) => {
  return (
    <div className="selected__product__count__toggle__container">
      <button type="button" className="btn__decrement">
        -
      </button>
      <span className="selected__product__count__value">1</span>
      <button type="button" className="btn__increment">
        +
      </button>
    </div>
  );
};
