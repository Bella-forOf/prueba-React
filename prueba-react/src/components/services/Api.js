const getDataFromAPI = (page = 1) => {
    return fetch(`https://swapi.dev/api/people/?page=${page}&format=json`)
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((user) => {
          return {
            name: user.name,
            height: user.height,
            mass: user.mass,
            gender: user.gender,
            url: user.url
          };
        });
        return cleanData;
        
    //     .sort(function (a,b) {
    //       if (a.name > b.name){
    //         return 1;
    //       }
    //       if (a.name < b.name) {
    //         return -1;
    //       }
    //       return 0;
    //     });
        
      });
     
  };





  export default getDataFromAPI;
  