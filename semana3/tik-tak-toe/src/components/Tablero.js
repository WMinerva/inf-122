import Cuadro from "./Cuadro";
import "../style/Tablero.css";
// import { useState } from "react";

function Tablero({ cuadros, onClick }) {
  function renderizarCuadro(i) {
    return <Cuadro valor={cuadros[i]} funcion={() => onClick(i)} />;
  }

  return (
    <div>
      <div className="tablero">
        {renderizarCuadro(0)}
        {renderizarCuadro(1)}
        {renderizarCuadro(2)}
        {renderizarCuadro(3)}
        {renderizarCuadro(4)}
        {renderizarCuadro(5)}
        {renderizarCuadro(6)}
        {renderizarCuadro(7)}
        {renderizarCuadro(8)}
      </div>
    </div>
  );
}
export default Tablero;
