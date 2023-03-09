

const PaintList = (props) => {
    const handleClick =  (ev) => {
        props.details(ev.target.url);
     console.log(ev.target.url);
      };          
      return ( 
      <div className='div-list'> 
     <ul className='ul'> Listado
     {props.data.map((character)=>(
        <li key={character.name} onClick={handleClick}><span>Nombre: {character.name}</span><span> ------Altura:{character.height}</span></li> 

     ))}
     </ul>
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