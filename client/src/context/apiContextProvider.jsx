import { useReducer, createContext } from "react";

const ApiContext = createContext();
const initState = {
    apiVal: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case "MOD" :
            return {
                ...state,
                apiVal: action.value
            }

        default:
            throw new Error();
    }
}

const ApiContextProvider = ({ children }) => {
  const [state, ApiContextDispatch] = useReducer(reducer, initState);
    return <ApiContext.Provider value={{apiVal: state.apiVal, ApiContextDispatch}}>{children}</ApiContext.Provider>
}

export { ApiContextProvider, ApiContext };