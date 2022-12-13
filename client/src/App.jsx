import { useState, useEffect } from 'react'
// import Parser from './parser';
import styled from 'styled-components';
import Search from './components/search';
import Feed from './components/feed';
import {SearchContextProvider} from './context/searchContextProvider';
import { ApiContextProvider } from './context/apiContextProvider';


const StyledTitle = styled.p`
  font-weight: 900;
  font-size: 200%;
  margin: 10% auto 1% auto
`
const RootDiv = styled.div`
  font-family: 'Gothic A1';
  display: flex;
  height: 100%;
  width: 100vw;
  
  background-color: #F1F3F4;
`
const LeftDiv = styled.div`
  background-color: #E8EAED;
  height: 100%;
  width: 20%;
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
`
const RightDiv = styled.div`
  
  height: 100%:
  width: 100%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  
`



function App() {

  return (
    <div className="App">
      <SearchContextProvider>
      <ApiContextProvider>
      <RootDiv>
        
          <LeftDiv>
            <StyledTitle>
              AllFeedsInOne
            </StyledTitle>
            <Search />
          </LeftDiv>
          <RightDiv>
            <Feed />
          </RightDiv>
      </RootDiv>
      </ApiContextProvider>
      </SearchContextProvider>
    </div>
  )
}

export default App
