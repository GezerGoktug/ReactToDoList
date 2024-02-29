const Card = (props) => {
  return (
    <div
      className={`bg-slate-300/75 backdrop-blur-[2px]  shadow-lg rounded-2xl text-center py-6 px-2  sm:px-6 text-slate-600 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
