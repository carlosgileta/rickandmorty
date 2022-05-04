
import './App.css';
import LocationContainer from './components/LocationContainer';
import SearchBox2 from './components/SearchBox2';
import port from './asses/img/rick-and-morty-rtj.gif'

function App() {
  return (
    <div className="App">
      
        <img src={port} alt="" className='prueba' />
      
      
      <SearchBox2/>
     
    </div>
  );
}

export default App;
