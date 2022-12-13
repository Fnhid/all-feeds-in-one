import { useReducer, createContext } from "react";

const SearchContext = createContext();
const initState = {
    searchVal: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case "MOD" :
            return {
                ...state,
                searchVal: action.value
            }

        default:
            throw new Error();
    }
}

const SearchContextProvider = ({ children }) => {
  const [state, SearchContextDispatch] = useReducer(reducer, initState);
    return <SearchContext.Provider value={{searchVal: state.searchVal, SearchContextDispatch}}>{children}</SearchContext.Provider>
}

export { SearchContextProvider, SearchContext };