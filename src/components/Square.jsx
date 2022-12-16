export const Square = ({ value, handleClick }) => {
  return (
    <button
      className="px-6 py-1 sm:px-12 sm:py-7 h-20 w-20 sm:h-36 sm:w-36 text-center font-bold align-middle text-3xl sm:text-7xl border text-amber-400"
      onClick={() => handleClick()}
    >
      {value}
    </button>
  );
};
