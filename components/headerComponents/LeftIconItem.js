const LeftIconItem = ({ children, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-gray-300 flex flex-col items-center space-y-3 cursor-pointer hover:opacity-60 transition-all duration-300 active:opacity-100 active:to-white"
    >
      {children}
      <p className="font-semibold">{title.toUpperCase()}</p>
    </div>
  );
};

export default LeftIconItem;
