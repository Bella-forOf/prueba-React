

const PaintList = (props) => {
    const handleClick =  (url) => {
        props.detail(url);
     console.log(url);
      };          
      return ( 
      <div className='div-list'> 
     <ul className='ul'> Listado
     {props.data.map((character)=>(
        <li key={character.name} onClick={() => handleClick(character.url)}><span>Nombre: {character.name}</span><span> ------Altura:{character.height}</span></li> 

     ))}
     </ul>
     <button>Prev</button>
     ||  {props.pages} ||
     <button>Next</button>
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