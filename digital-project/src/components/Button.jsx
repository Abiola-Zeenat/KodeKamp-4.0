const Button = ({ className, text }) => {
  return (
    <div>
      <button className={className}>
        {text}
        <span className="btn-arrow">➡</span>
      </button>
    </div>
  );
};

export default Button;
