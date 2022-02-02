const urlAPI = 'https://rickandmortyapi.com/api';
export const getAllCharacters = () => 
    fetch(`${urlAPI}/character`)
    .then((res) => res.json())
    .then((data)=> data.results)
    .catch((error)=> console.log(error))
