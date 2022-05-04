import  { useEffect, useState } from "react"
// import getNameUbications from "../service/getNameUbications";
import './searchbox.css'
import getUbication from "../service/getUbication";
import LocationContainer from "./LocationContainer";
import numberRandom from "../service/numberRandom";
// import getNameUbications from "../service/getNameUbications";



function SearchBox2() {
    const [users,setUsers] = useState([]);
    const[text,setText] = useState('');
    const[suggestions, setSuggestions] = useState([])
    const[numberId,setNumberId] = useState(numberRandom())
    // const[inputText,setInputText] = useState(numberRandom())
    
    
    useEffect(() => {
            getUbication()
          .then((response) => {
              setUsers(response.data);
          }).catch((err) => {
              console.log(err)
          });
      }, []) 


     
      const onSuggestHandler = (text)=>{
          setText(text);
         
          setSuggestions([]);
          
      }
     
  

      const onChangeHandler = (text)=>{
          let matches = []
          if (text.length >0) {
              matches = users.filter(user =>{
                 const regex = new RegExp(`${text}`);
                return user.name.match(regex)
              })
          }
          setSuggestions(matches)
          setText(text)
          
      }

    
      
  return (
    <div>
        <h1 className= 'title'>Rick and Morty</h1>
    <input type="text" className="inputbox" id="" 
    onChange={e=>onChangeHandler(e.target.value)}
    
    value={text}
    
    />
     
    {/* se guarda en el estado de input para mandarlo a otro componente a llamar a toda la ubicacion espesifica  */}
    {suggestions && suggestions.map((suggestion,i)=>
       <div className="inputsuggestion" key={i}
       onClick={()=>onSuggestHandler(suggestion.name, setNumberId(suggestion.id))}
       >{suggestion.name}</div>
    )}
    
   <LocationContainer numberId = {numberId} clean = {setText} />
 
</div>
  )
}

export default SearchBox2