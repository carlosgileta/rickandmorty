import axios from 'axios';
import React, {useState, useEffect } from 'react'
import Pagination from './Pagination';
import ResidentInfo from './ResidentInfo';
import './residentcontainer.css'

const ResidentContainer = ({url}) => {
    const[characters,setCharacters] = useState([])
    const[loading,setLoading] = useState(false)
    const[currentPage, setCurrentPage]= useState(1)
    const[charactersPerPage,setCharactersPerPage]= useState(10)


    useEffect(() =>{
const promise = axios(url);
setLoading(true)
    promise.then((response)=>{
     setCharacters(response.data.residents);
    console.log(response.data.residents);
      })
    .catch((err)=>{
        console.log(err)
    })
    .finally(()=>{
        setLoading(false)
    });
    }, [url]);

    if(loading){
        return <p>Data is Loading...</p>
    }
    
//limitacion de caracteres por pagina
    const indexOFLastPost = currentPage * charactersPerPage;
    const indexOfFirstPost = indexOFLastPost - charactersPerPage;
    const character = characters.slice(indexOfFirstPost, indexOFLastPost);
    console.log(character);

  return (
      
     <div className='residentContainer'>
       
           {(characters !=null && characters.length >0)
           ?
           character.map((url)=>(
           
            <div>
                 <ResidentInfo key={url} url = {url}/> 
                
            </div>

          ))
           :
           (<p>Data is Loading...</p>)
        }
        <Pagination charactersPerPage={charactersPerPage} totalCharacters = {characters.length} />
     </div>
  )
}

export default ResidentContainer