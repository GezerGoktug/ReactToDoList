const Button = ({ onClick, className, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-2  flex gap-1 items-center justify-center font-semibold text-white transition-colors ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
