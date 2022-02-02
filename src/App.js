import logo from './logo.svg';
import './App.css';
import { getAllCharacters } from './services/dataAPI';
import React, { useState, useEffect } from 'react';

// useState --> Se utiliza para que guarde y renderice data (información)

function App() {
  const [character, setCharacter] = useState([])
  useEffect(()=> {
    getAllCharacters()
    .then(data => setCharacter(data))

  }, [])
  return (
    <>
      {
        character.map((item)=>  
          <div key={ item.id }>
            <img src={ item.image }/>
            <p>{ item.name }</p>
          </div>          
        )
      }
    </>
  );
}

export default App;
