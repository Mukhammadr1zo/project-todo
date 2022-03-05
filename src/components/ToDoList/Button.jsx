import "./button.css";
import PropTypes from "prop-types";

function Button({ text, btnType }) {
  return <button className={`btn ${btnType}`}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
  btnType: PropTypes.string,
};

export default Button;
