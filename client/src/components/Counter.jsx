/* eslint-disable react/prop-types */

const Counter = (props) => {
  const { handleIncrement, handleDecrement, count } = props;

  return (
    <div>
      <button
        className="bg-orange-500 text-white px-3 py-1 rounded-lg mr-2"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="text-xl font-semibold">{count}</span>
      <button
        className="bg-[#f274a8] text-white px-3 py-1 rounded-lg ml-2"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
