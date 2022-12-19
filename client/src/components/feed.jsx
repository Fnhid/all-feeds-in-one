import { useContext, useEffect, useState} from 'react';
import { ApiContext } from "../context/apiContextProvider";
import styled from 'styled-components';
import { SearchContext } from "../context/searchContextProvider";
import axios from 'axios';

const Container = styled.div`
  width: 70vw;
  height: 100px;
  background-color: #E8EAED;
  margin: 1% 2% 1% 6%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`
const Title = styled.div`
  font-weight: 900;
  margin: 1% auto 1% 1%;
  color: #0E1013;
`
const Site = styled.div`
  font-weight: 400;
  color: #17181B;
  margin: 1% 0 1% 1%;
`
const Date = styled.div`
  font-weight: 400;
  color: #17181B;
  margin: 1% 0 1% 1%;
`

const Feed = () => {
  const [ren,setRen] = useState('')
  const { searchVal, SearchContextDispatch } = useContext(SearchContext);
  const { apiVal, ApiContextDispatch } = useContext(ApiContext);
  useEffect(() => {
    Render(apiVal, searchVal)
  }, [searchVal]);
  
  const Parser = (apival, ApiContextDispatch) => {
    useEffect(() => {
      getApi();
    }, []);
    const onChangeVal = async (e) => {
      const apiVal = e;
      await ApiContextDispatch({ type: "MOD", value: apiVal })
    }
    const getApi = async () => {
      await axios
        .get("/api")
        .then((res) => {onChangeVal(res);})
        .catch((err) => {
          console.error(err);
        });    
    }
  }
  
  const Filter = (apis, reg) => {
  let filterApi = []; 
  // console.log(apis)
  for (api of apis.contents){
    if (reg.test(api.title) || reg.test(api.siteName) || reg.test(api.date)){
      filterApi.push(api);
    }
  };
  let ret = filterApi.map((api) => {

  const handleClick = (link) => {
    window.location.href = link;
  }
  return (
    <Container onClick={() => handleClick(api.link)}>
    <Title>
      {api.title}
    </Title>
    <Site>
      {api.siteName}
    </Site>
    <Date>
      {api.date}
      </Date>
    </Container> 
  )
  })
    return (
      <>
      {ret }
      </>
    )

  }
  let api = '';
  let fltedApi = '';
  const Render = (apiVal, searchVal) => {
    const reg = new RegExp(searchVal)
    
    if (typeof apiVal.data !== 'undefined') {
      api = apiVal.data;
      setRen(Filter(api, reg));

    }
    console.log(fltedApi);
    return (
      <>
        {ren}
      </>
    )
  }

  
  

  return (
      <>
      {Parser(apiVal, ApiContextDispatch)}
      <Render />
      </>
  )
}

export default Feed;