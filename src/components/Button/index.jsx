export const Button = ({ buttonClassName, buttonText, buttonType }) => {
  return (
    <button className={buttonClassName} type={buttonType}>
      {buttonText}
    </button>
  );
};
