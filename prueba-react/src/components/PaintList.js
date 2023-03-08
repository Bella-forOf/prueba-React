

const PaintList = (props) => {
    console.log(props)           
      return ( 
      <div className='div-list'> 
     <ul className='ul'> Listado </ul>
     {props.data.map((character)=>(
        <li key={character.name}><span>Nombre: {character.name}</span><span> ------Altura:{character.height}</span></li>
     ))}
     </div>);
};
    

export default PaintList;