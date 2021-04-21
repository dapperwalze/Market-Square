import "./badge.scss";

export const Badge = (props) => {
  return <span className="badge">{props.numberOfItems}</span>;
};
