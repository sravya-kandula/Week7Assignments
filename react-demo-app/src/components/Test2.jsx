import { useState } from "react";

function Test2() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="bg-green-200 p-10 rounded-xl">

      <h1 className="text-4xl mb-5">Counter Application</h1>

      <h2 className="text-5xl mb-6">{count}</h2>

      <div className="flex gap-5 justify-center">

        <button
          onClick={increment}
          className="bg-blue-500 text-white px-5 py-2 rounded"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="bg-red-500 text-white px-5 py-2 rounded"
        >
          Decrement
        </button>

        <button
          onClick={reset}
          className="bg-gray-500 text-white px-5 py-2 rounded"
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default Test2;