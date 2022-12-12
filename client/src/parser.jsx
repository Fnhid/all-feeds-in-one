import { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { ApiContext } from "./context/apiContextProvider";
export default async function Parser() {
  const { apiVal, ApiContextDispatch } = useContext(ApiContext);
  const onChangeVal = (e) => {
      ApiContextDispatch({ type: "MOD", value: apiVal })
      console.log(e.target.value);
  }
  const getApi = async () => {
    await axios
      .get("/api")
      .then((res) => {onChangeVal(res)})
      .catch((err) => {
        console.error(err);
      });    
  }
  
  useEffect(() => {
    getApi();
  }, []);
  return(
    JSON.stringify(data)
  )
}

