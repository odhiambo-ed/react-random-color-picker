import { useState } from "react";


function RandomColor() {
    const [randomColor, setRandomColor] = useState("rgb(255,255,255)")
    const [colorType, setColorType] = useState("rgb")

    const handleRgbClick = () => {
        setColorType("rgb")
        const rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
        setRandomColor(rgb)
    }

    const handleHexClick = () => {

    }

    const handleHslClick = () => {

    }
  return (
    <div style={{backgroundColor: randomColor}} className="container-fluid vw-100 vh-100 d-flex flex-column gap-2 justify-content-center align-items-center">
      <h3>Generate Random Colors</h3>
      <div className="d-flex gap-1">
        <div onClick={ handleRgbClick } className="btn btn-outline-dark">
          Generate With RGB
        </div>
        <div onClick={ handleHexClick } className="btn btn-outline-dark">
          Generate With Hexadecimal
        </div>
        <div onClick={ handleHslClick } className="btn btn-outline-dark">
          Generate With HSL
        </div>
      </div>
      <div className="btn btn-outline-dark py-2 px-5">Color: {colorType} </div>
      {/* <div className="btn btn-outline-dark py-2 px-5">Color: #{randomHex} </div>
      <div className="btn btn-outline-dark py-2 px-5">Color: hsl({randomHsl}) </div> */}
    </div>
  );
}

export default RandomColor