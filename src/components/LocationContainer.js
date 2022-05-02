import axios from 'axios';
import React from 'react'
import  { useEffect,useState } from "react"
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';

function LocationContainer({numberId,clean}) {

  
   
   const[number,setNumber] = useState(numberId)
  //  const[clear,setClear] = useState(clean)
    const[name,setName] = useState('')
    const[type,setType] = useState('')
    const[dimension,setDimension] = useState('')
    const[population,setPopulation] = useState(0)
    const[url,setUrl] = useState('')

    const onClickbutton = ()=>{
      setNumber(numberId)
        
    }
   
   
    useEffect(() => {
     const URL = `https://rickandmortyapi.com/api/location/${number}`;
     setUrl(URL); 
     const promise = axios(URL); 
       promise.then((response) => {
          
           setName(response.data.name)
           setType(response.data.type)
           setDimension(response.data.dimension)
           setPopulation(response.data.residents.length)
          console.log(response.data)
          
        }).catch((err) => {
            console.log(err)
        });
    }, [number])  
    
   
      //mandar a llamar  resident container al resident container pasar el arreglo donde estan todos los residentes, mapeo de las urls y pasarle a la url pasarsela  mi conponete resident info una vez en el resident info con useeffect hacer una peticio a la url que se llamando por parametro
  
  
  
      return (
    <>
    <button id="formulario" onClick={onClickbutton}  >Clean for new request</button>
    <LocationInfo
    name={name}
    type={type}
    dimension={dimension}
    population={population}
  />

   <ResidentContainer url = {url}/>
   </>
  )
}

export default LocationContainer