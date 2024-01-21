/* eslint-disable react/prop-types */
function Button({ onClick, buttontype, children }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttontype === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
