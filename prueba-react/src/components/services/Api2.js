const getCharacter = (id = 1) => {
    return fetch(`https://swapi.dev/api/people/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const dataDetail = data;
        console.log(dataDetail);
        return dataDetail;
        
    });
     
};
export default getCharacter;