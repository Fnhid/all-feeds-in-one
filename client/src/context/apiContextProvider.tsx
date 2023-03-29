import { useReducer, createContext, Dispatch, ReactNode } from "react";


interface State {
  apiVal: Record<string, unknown> | null;
}


type Action = { type: "MOD"; value: Record<string, unknown> };

interface ApiContextType {
  apiVal: Record<string, unknown> | null;
  ApiContextDispatch: Dispatch<Action>;
}

const ApiContext = createContext<ApiContextType>({ 
  apiVal: null, 
  ApiContextDispatch: () => {} 
});

const initState: State = {
  apiVal: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "MOD":
      return {
        ...state,
        apiVal: action.value,
      };
    default:
      throw new Error();
  }
};

const ApiContextProvider: React.FC<{ children: ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <ApiContext.Provider value={{ apiVal: state.apiVal, ApiContextDispatch: dispatch}}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiContextProvider };
