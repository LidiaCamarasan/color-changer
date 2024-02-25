import { useState } from "react";

function App() {
  const [color, setColor] = useState("lime");

  /* function changeColor(color) {
    setColor(color);
  } */

  return (
    <>
      <div className="big-container" style={{ backgroundColor: color }}>
        <div className="colors-container">
          <button onClick={() => setColor("red")} className="red-button">
            Red
          </button>
          <button onClick={() => setColor("green")} className="green-button">
            Green
          </button>
          <button onClick={() => setColor("blue")} className="blue-button">
            Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
