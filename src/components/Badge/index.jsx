import "./badge.scss";

export const Badge = (props) => {
  return <span className={props.className}>{props.numberOfItems}</span>;
};
