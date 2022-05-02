// import React  from 'react'
// import { useEffect, useState } from 'react'
// import getUbication from '../service/getUbication';
// import numberRandom from '../service/numberRandom';






// function SearchBox() {
//     const num = numberRandom();

//   const[ubication,setUbication] = useState([num]);


//   useEffect(() => {
//     //   getAllUbications()
//     getUbication()
//       .then((response) => {
       
//           setUbication(response.data)
//       }).catch((err) => {
//           console.log(err)
//       });
//   }, [])


//   const list = ubication.map((item) => <option key={item.name}>{item.name}</option>)
//   return (
//     <>
    
//      <select name="" id="" >
//       {list}
//      </select>
//     {/* <button onClick={}> Send </button> */}
//     </>
//   )
// }

// export default SearchBox