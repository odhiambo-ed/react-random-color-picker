import { useState } from "react";


function RandomColor() {
    const [randomColor, setRandomColor] = useState("rgb(255,255,255)")
    const [colorType, setColorType] = useState("rgb")
    const [activeButton, setActiveButton] = useState("rgb")

    const handleRgbClick = () => {
        setColorType("rgb")
        setActiveButton("rgb")
        const rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
        setRandomColor(rgb)
    }

    const handleHexClick = () => {
        setColorType("hex")
        setActiveButton("hex")
        const hex = `#${Math.floor(Math.random() * 256).toString(
          16
        )}${Math.floor(Math.random() * 256).toString(16)}${Math.floor(
          Math.random() * 256
        ).toString(16)}`;
        setRandomColor(hex)

    }

  return (
    <div
      style={{ backgroundColor: randomColor }}
      className="container-fluid vw-100 vh-100 d-flex flex-column gap-2 justify-content-center align-items-center"
    >
      <h3>Generate Random Colors</h3>
      <div className="d-flex gap-1">
        <div
          onClick={handleRgbClick}
          className={`btn btn-outline-dark ${activeButton === 'rgb' ? 'active' : ''}`}
        >
          Generate With RGB
        </div>
        <div
          onClick={handleHexClick}
          className={`btn btn-outline-dark ${activeButton === 'hex' ? 'active' : ''}`}
        >
          Generate With Hexadecimal
        </div>
      </div>
      <p>The color type is: {colorType}</p>
      <div className="btn btn-outline-dark py-2 px-5">
        Color: {randomColor}{" "}
      </div>
    </div>
  );
}

export default RandomColor