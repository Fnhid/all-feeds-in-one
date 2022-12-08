import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState();
  const urlWithProxy = "http://localhost:8080/api/v1";

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });    
  }

  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  )
}

export default App
