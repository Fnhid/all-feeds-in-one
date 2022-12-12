import { useState, useEffect } from 'react'
import Parser from './parser';
import styled from 'styled-components';
import Search from './components/search';
import {SearchContextProvider} from './context/searchContextProvider';



const RootDiv = styled.div`
  font-family: 'Gothic A1';
  display: flex;
`
const LeftDiv = styled.div`
  height: 100%;
  width: 20%;
  position: fixed;
  justify-content: center;
`
const RightDiv = styled.div`
  height: 100%:
  width: 80%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
`



function App() {

  return (
    <div className="App">
      <SearchContextProvider>
      <RootDiv>
        
          <LeftDiv>
            <Search />
            Left
          </LeftDiv>
          <RightDiv>
            React twost
          </RightDiv>
        
      </RootDiv>
      </SearchContextProvider>
    </div>
  )
}

export default App
