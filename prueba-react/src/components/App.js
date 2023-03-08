
import './../styles/App.css';
import Header from './Header';
import PaintList from './PaintList';
import { useEffect, useState } from 'react';
import getDataFromAPI from './services/Api';

function App() {
  const [name, setName] = useState('Lola');
  const [name2, setName2] = useState('Apellido');
  const [data, setData] = useState([]);
  const nameWorld = "mundo";
  const titleClass = "title";

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      setData(cleanData);
  });
},[]);

  const handleOnSubmit = (ev) => {
    ev.preventDefaul();
  };
  const handleChangeName = (ev) => {
    setName(ev.target.value)
  };
  return (
    <div> 
      <Header></Header>
      <main>
        <p className={`header__${titleClass}`}> hola {nameWorld} esto es un usestate {name} y esto otra {name2} </p>
        <img src="https://m.media-amazon.com/images/I/711CwL2zBSL._AC_SX425_.jpg" title='Perritos' alt="perritos graciosos"/>
        <form  onSubmit={handleOnSubmit}>  
        <label> Busqueda por Nombre </label>
        <input
        className="input_name"
        autoComplete="off"
        type="text"
        name="search"
        placeholder="escribir Nombre"
        onInput={handleChangeName}
        value={name}
      /> 
      </form>
        <PaintList
        data={data}></PaintList>
      </main>
    </div>
      
  );
}

export default App;
