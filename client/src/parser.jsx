import { React, useState, useEffect } from 'react'
import axios from 'axios';

export default function Parser() {
  const [data, setData] = useState();

  const getApi = async () => {
    await axios
      .get("/api")
      .then((res) => {setData(res)})
      .catch((err) => {
        console.error(err);
      });    
  }

  useEffect(() => {
    getApi();
  }, []);
  return (
    <p>{JSON.stringify(data)}</p>
  )
}

