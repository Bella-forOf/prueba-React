

const PaintList = (props) => {
    const handleClick =  (url) => {
        props.details(url);
     console.log(url);
      }; 
      const handleClickNext = () => {
        props.setPages(props.pages + 1);
      };    
      const handleClickPrevios = () => {
        props.setPages(props.pages - 1);
      };    
      return ( 
      <div className='div-list'> 
     <ul className='ul'> Listado
     {props.data.map((character)=>(
        <li key={character.name} onClick={() => handleClick(character.url)}><span>Nombre: {character.name}</span><span> ------Altura:{character.height}</span></li> 

     ))}
     </ul>
     <button onClick={handleClickNext}>Prev</button>
     ||  {props.pages} ||
     <button onClick={handleClickPrevios}>Next</button>
     <aside>
        <p>DETALLES</p>
     <p>{props.dataDetailConst.name}</p>
        <p>{props.dataDetailConst.created}</p>
        <p>{props.dataDetailConst.eye_color}</p>
        <p>{props.dataDetailConst.hair_color}</p>
     </aside>
     </div>);
};
    

export default PaintList;