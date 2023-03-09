
import './../styles/App.css';
import Header from './Header';
import PaintList from './PaintList';
import { useEffect, useState } from 'react';
import getDataFromAPI from './services/Api';
import getCharacter from './services/Api2';

function App() {
  const [name, setName] = useState('Lola');
  const [name2, setName2] = useState('Apellido');
  const [data, setData] = useState([]);
  const [dataDetailConst, setDataDetailConst] = useState({});
  const [currentCharacter, setCurrentCharacter] = useState (1);
  const [pages, setPages] = useState(1);
  const nameWorld = "mundo";
  const titleClass = "title";

  useEffect(() => {
    getDataFromAPI(pages).then((cleanData) => {
      setData(cleanData);
  });
},[pages]);

useEffect(() => {
  getCharacter(currentCharacter).then((dataDetail) => {
    setDataDetailConst(dataDetail);
    console.log(dataDetailConst)
});
},[currentCharacter]);

  const handleOnSubmit = (ev) => {
    ev.preventDefaul();
  };
  const handleChangeName = (ev) => {
    setName(ev.target.value)
  };
  const details = (url) => {
    debugger;
    const id = url.split('/');
    const id2 = id.slice(-2)[0];
setCurrentCharacter(id2);

// const nextPage = (ev)=> {
//   ev.preventDefaul
//   setPages(pages + 1);
// }
// const previousPage = (ev)=> {
//   setPages(pages - 1);
// }
  }
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
        data={data}
        dataDetailConst={dataDetailConst}
        details={details}
        pages={pages}
        setPages={setPages}
        ></PaintList>
      </main>
    </div>
      
  );
}

export default App;
