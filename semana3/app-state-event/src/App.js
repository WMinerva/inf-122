import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';
function App() {
  // variable y y su set
  // estado y funcion del estado
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks + 1);
    console.log("Click")
  }
  const click = () => {
    setNumClicks(nroClicks + 1);
    console.log("Click")
  }
  const click = () => {
    setNumClicks(nroClicks + 1);
    console.log("Click")
  }
  const click = () => {
    setNumClicks(nroClicks + 1);
    console.log("Click")
  }
  const reiniciar = () => {
    setNumClicks(0);
    console.log("Reiniciar")
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        {/* <Contador nroClicks={nroClicks} /> */}
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="Click" esBotonClick={true}
            funcionClick={click} />
          <Boton texto="Click" esBotonClick={true}
            funcionClick={click} />
          <Boton texto="Click" esBotonClick={true}
            funcionClick={click} />
          <Boton texto="Click" esBotonClick={true}
            funcionClick={click} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
      </div>
    </div>
  );
}

export default App;
