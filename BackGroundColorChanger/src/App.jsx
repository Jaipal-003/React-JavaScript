import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <>
      <div
        className="w-full  h-screen duration-200"
        style={{ backgroundColor: color }}
        
      >
        <div
          className="fixed flex flex-wrap justify-center top-40 ml-10 mt-10 px-6 w-1/4 
      "
        >
          <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-red-400 px-4 py-4 rounded">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-5 py-3 text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-5 py-3 text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-5 py-3 text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("lightskyblue")}
              className="outline-none px-5 py-3 text-white shadow-lg"
              style={{ backgroundColor: "lightskyblue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("lightpink")}
              className="outline-none px-5 py-3 text-white shadow-lg"
              style={{ backgroundColor: "lightpink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-5 py-3 text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-5 py-3 text-white shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              lavender
            </button>
            <button
              onClick={() => setColor("rebeccapurple")}
              className="outline-none px-5 py-3 text-white shadow-lg"
              style={{ backgroundColor: "rebeccapurple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("maroon")}
              className="outline-none px-5 py-3 text-white shadow-lg"
              style={{ backgroundColor: "maroon" }}
            >
              Marron
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
