import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './residentInfo.css'

const  ResidentInfo = ({url}) => {
    const[name,setName] = useState('')
    const[image,setImage] = useState()
    const[status,setStatus] = useState()
    const[color,setColor] = useState('color')
    const[origin,setOrigin] = useState('')
    const[episode,setEpisode] = useState()
    useEffect(() =>{
        const promise = axios(url);
       
            promise.then((response)=>{
            setStatus(response.data.status)    
            setImage(response.data.image)
            setName(response.data.name)
            setOrigin(response.data.origin.name)
            setEpisode(response.data.episode.length)

            const color = (status)
            switch (color) {
                case "Alive":
                    setColor('green')
                    break;
                case "Dead":
                   setColor('red')
                   break;
                case "unknown":
                    setColor('yellow')
                    break;   
                default:
                    break;
            } 
            
            });
            },[url,name]);
         
            return (
                <div className='div_card'>
                     <h3 className={color}>{status}</h3>
                    <img className='img' src={image} alt="" />
                    <h1>{name}</h1>
                    <h2>{origin}</h2>
                    <p>Total de episodios  {episode}</p>
                </div>
              );
            };
            
            export default ResidentInfo