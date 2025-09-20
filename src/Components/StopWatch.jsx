import React, { useEffect, useRef, useState } from "react";

export default function StopWatch() {
  const [ms, setMs] = useState(0);
  const [isStart, setIsStart] = useState(false);
  let timeRef = useRef(null);

  useEffect(() => {
    if (isStart) {
      if (timeRef.current === null) {
        timeRef.current = setInterval(() => {
          setMs((pre) => pre + 10);
        }, 10);
      }
    } else {
      clearInterval(timeRef.current);
      timeRef.current = null;
    }
  }, [isStart]);

  function resetBtn() {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setMs(0);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-8">Stop Watch</h1>

        <div className="space-x-4 mb-6">
          <button
            onClick={() => setIsStart(true)}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg shadow-md text-lg font-medium transition"
          >
            Start
          </button>
          <button
            onClick={() => setIsStart(false)}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg shadow-md text-lg font-medium transition"
          >
            Stop
          </button>
          <button
            onClick={resetBtn}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-md text-lg font-medium transition"
          >
            Reset
          </button>
        </div>

        <h1 className="text-5xl font-mono tracking-wider bg-gray-800 px-8 py-4 rounded-xl shadow-lg">
          <span>
            {Math.trunc(ms / 60000) % 60 < 10
              ? `0${Math.trunc(ms / 60000) % 60}`
              : Math.trunc(ms / 60000) % 60}
            :
          </span>
          <span>
            {Math.trunc(ms / 1000) % 60 < 10
              ? `0${Math.trunc(ms / 1000) % 60}`
              : Math.trunc(ms / 1000) % 60}
            :
          </span>
          <span>
            {(ms % 1000) / 10 < 10 ? `0${(ms % 1000) / 10}` : (ms % 1000) / 10}
          </span>
        </h1>
      </div>
    </>
  );
}
