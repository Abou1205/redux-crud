const Button = ({ btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-10 text-white bg-indigo-800 flex items-center justify-center border mt-2 rounded-md"
    >
      {btnText}
    </button>
  );
};

export default Button;
