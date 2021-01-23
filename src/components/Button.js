const Button = ({ color, text, onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color, color: "white" }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
