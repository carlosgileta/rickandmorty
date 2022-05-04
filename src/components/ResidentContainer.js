import axios from 'axios';
import React, {useState, useEffect } from 'react'
import ResidentInfo from './ResidentInfo';
import './residentcontainer.css'

const ResidentContainer = ({url}) => {
    const[characters,setCharacters] = useState([])
    const[loading,setLoading] = useState(false)
    // const[currentPage, setCurrentPage]= useState(1)
    // const[charactersPerPage,setCharactersPerPage]= useState(10)
    //   setCurrentPage(1)
    //   setCharactersPerPage(10)
    useEffect(() =>{
const promise = axios(url);
setLoading(true)
    promise.then((response)=>{
     setCharacters(response.data.residents);
   
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
    
    
// limitacion de caracteres por pagina
      let character 
      const currentPage = 1; // numero de paginas
      const charactersPerPage = 20; // carcateres por pagina
  if (characters !=null && characters.length >0) {
        const indexOFLastPost = currentPage * charactersPerPage;
    const indexOfFirstPost = indexOFLastPost - charactersPerPage;
     character = characters.slice(indexOfFirstPost, indexOFLastPost);
  
  }
  

  return (
      
     <div className='residentContainer'>
       
           {(characters != null && characters.length >0)
           ?
           character.map((url)=>(
           
            <div>
                 <ResidentInfo key={url} url = {url}/> 
                
            </div>

          ))
           :
           (<p>Data is Loading...</p>)
        }
        {/* <Pagination charactersPerPage={charactersPerPage} totalCharacters = {characters.length} /> */}
     </div>
  )
}

export default ResidentContainer