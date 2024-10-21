import { useState } from 'react'
import './App.css'


function App() {
  const [name, setName] = useState('Sofía'); 

  const manejarName = (newName) => {
      setName(newName);
  }
  
  return (
      <div>
          <h2>Teacher Name: {name}</h2>
          <ul>
              <li><button onClick={() => manejarName('Data')}>Data</button></li>
              <li><button onClick={() => manejarName('Reyes')}>Reyes</button></li>
              <li><button onClick={() => manejarName('Yolanda')}>Yolanda</button></li>
          </ul>
      </div>
  );
}

export default App;