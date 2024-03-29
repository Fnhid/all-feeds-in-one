import { useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "../context/searchContextProvider";

const StyledInput = styled.input.attrs({type: 'text', placeholder: 'Search Here..'})`
    width: 80%;
    height: 5%;
    font-size: 15px;
    border-radius: 15px;
    margin: 10% 10%;
    outline: none;
    font-weight: 200;
    background-color: rgb(233,233,233);
    border: 0;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(50, 50, 50, 0.55);
    -moz-box-shadow:    1px 1px 5px 0px rgba(50, 50, 50, 0.55);
    box-shadow:         1px 1px 5px 0px rgba(50, 50, 50, 0.55);
`

const Search: React.FC = () => {
  const { searchVal, SearchContextDispatch } = useContext(SearchContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SearchContextDispatch({ type: "MOD", value: e.target.value });
  };

  return (
    <>
      <StyledInput
        type="text"
        value={searchVal ?? ""}
        onChange={handleChange}
      />
    </>
  );
};

export default Search;
