import { useContext, useEffect, useState} from 'react';
import { ApiContext } from "../context/apiContextProvider";
import styled from 'styled-components';
import { SearchContext } from "../context/searchContextProvider";
import axios from 'axios';
import { Loading } from "../loading"

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
  const [ren,setRen] = useState<JSX.Element | null>(null);
  const { searchVal, SearchContextDispatch } = useContext(SearchContext);
  const { apiVal, ApiContextDispatch } = useContext(ApiContext);

  useEffect(() => {
    const parser = async (apiVal: any, ApiContextDispatch: any) => {
      const onChangeVal = async (e: any) => {
        const apiVal = e;
        await ApiContextDispatch({ type: "MOD", value: apiVal });
      }
      const getApi = async () => {
        try {
          const res = await axios.get("/api");
          onChangeVal(res);
        } catch (err) {
          console.error(err);
        }
      }

      await getApi();
    }

    parser(apiVal, ApiContextDispatch);
  }, [apiVal, ApiContextDispatch]);

  const Filter = (apis: any, reg: RegExp) => {

    let filterApi = []; 

    if (!apis || !apis.contents) {
      return null;
    }

    for (let api of apis.contents){
      if (reg && (reg.test(api.title) || reg.test(api.siteName) || reg.test(api.date))){
        filterApi.push(api);
      }
    }

    let ret = filterApi.map((api) => {

      const handleClick = (link: string) => {
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
        {ret}
      </>
    )
  }

  useEffect(() => {
    const reg = new RegExp(searchVal);
    
    const api = apiVal?.data;
    const filteredApi = Filter(api, reg);
    setRen(filteredApi);
  }, [apiVal, searchVal]);

  return (
    <>
      {ren ?? <Loading />}
    </>
  )
}

export default Feed;
