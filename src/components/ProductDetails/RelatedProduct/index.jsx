import "./relatedproduct.scss";

export const RelatedProduct = (props) => {
  return (
    <div className="related__product__figure">
      <img
        className="related__product__image"
        src={props.src}
        alt={props.alt}
      />
      <p className="related__product__name">{props.productName}</p>
    </div>
  );
};
