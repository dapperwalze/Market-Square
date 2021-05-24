import { Link } from "react-router-dom";

export const BigCtaButton = ({ text, href, className }) => {
  return (
    <Link to={href} className={className}>
      {text}
    </Link>
  );
};
