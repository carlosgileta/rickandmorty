import './locationinfo.css'
const LocationInfo = ({ name, type, dimension, population }) => {
    return (
      <div className="location">
        <div className='container1'>
            <h2 >{name}</h2>
        </div>
        
        
          <div>
            <b>Type: </b>
            {type}
          </div>
          <div>
            <b>Dimension: </b>
            {dimension}
          </div>
          <div>
            <b>Population: </b>
            {population}
          </div>
        </div>
      
    );
  };
  
  export default LocationInfo;