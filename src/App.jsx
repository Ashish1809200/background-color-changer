import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-4">
          <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-4 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="px-5 py-1 rounded-full text-white text-xl outline-none shadow-2xl"
              style={{ background: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="px-5 py-1 rounded-full text-white text-xl outline-none shadow-2xl"
              style={{ background: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="px-5 py-1 rounded-full text-white text-xl outline-none shadow-2xl"
              style={{ background: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              className="px-5 py-1 rounded-full text-white text-xl outline-none shadow-2xl"
              style={{ background: "blue" }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
