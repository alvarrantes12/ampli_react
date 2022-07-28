import React, { useState } from 'react'
import { postFetch } from './FetchMethods';


export const Form = ({setRefresh}) => {
  const [animalName, setAnimalName] = useState('');
  const [specie, setSpecie] = useState('');
  

  function handleSubmit(){
    postFetch("animals", {name: animalName, specie: specie})
    .then(() => {
      setAnimalName(''); 
      setSpecie(''); 
      setRefresh(true);
    } ) 
  }
    

  return (
    <form onSubmit={handleSubmit}>      
        <label>Ingrese el nombre del animal</label>        
          <input value={animalName} placeholder="Nombre del animal" 
          onChange={(e) => setAnimalName(e.target.value)} 
          style={{with:"400px"}}>
          </input>
        <br/>
        <label>Ingrese una especie</label>        
          <input value={specie} placeholder="Especie del animal" 
          onChange={(e) => setSpecie(e.target.value)}
          style={{with:"400px"}}>
          </input >
        <br/>
        <button 
         type="submit">
          Aceptar
        </button>    
    </form>    
  )
}
