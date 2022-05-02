import axios from "axios";

const getNameUbications = async (name) =>{
    const URL =`https://rickandmortyapi.com/api/location/?name=${name}`;
    const req = await axios.get(URL);
	return req;

}

export default getNameUbications