import axios from "axios";





const getUbication = async ()=>{
    
    const element = [];
for (let i = 0; i < 126; i++) {
     element.push(i); 
}
    const URL =`https://rickandmortyapi.com/api/location/${element}`
    const req = await axios.get(URL);
	return req;
}

export default getUbication