export const Square = ({ value, handleClick }) => {
  return (
    <button
      className="px-12 py-7 text-center font-bold align-middle text-3xl md:text-7xl border text-amber-400"
      onClick={() => handleClick()}
    >
      {value}
    </button>
  );
};
