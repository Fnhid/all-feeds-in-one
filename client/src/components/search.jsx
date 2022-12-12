import { useContext, useEffect, useState } from "react"
import styled from 'styled-components';
import { SearchContext } from "../context/searchContextProvider";

const StyledInput = styled.input.attrs({type: 'text', placeholder: 'Search Here..'})`
    width: 80%;
    height: 5%;
    font-size: 15px;
    border-radius: 15px;
    margin: 10% auto auto 10%;
    outline: none;
    font-weight: 200;
    background-color: rgb(233,233,233);
    border: 0;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(50, 50, 50, 0.55);
    -moz-box-shadow:    1px 1px 5px 0px rgba(50, 50, 50, 0.55);
    box-shadow:         1px 1px 5px 0px rgba(50, 50, 50, 0.55);
`
  
const Search = () => {
    const { searchVal, SearchContextDispatch } = useContext(SearchContext);
    const onChangeVal = (e) => {
        SearchContextDispatch({ type: "MOD", value: searchVal })
        console.log(e.target.value);
    }
    return (
        <StyledInput onChange={onChangeVal}></StyledInput>
    )

}

export default Search;