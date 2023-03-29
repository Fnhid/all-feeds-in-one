import { useReducer, createContext, Dispatch, ReactNode } from "react";

interface State {
  searchVal: string;
}

interface Props {
  children: ReactNode;
}

type Action = { type: "MOD"; value: string };

interface SearchContextType {
  searchVal: any | RegExp;
  SearchContextDispatch: Dispatch<Action>;
}

const SearchContext = createContext<SearchContextType>({ 
  searchVal: '', 
  SearchContextDispatch: () => {},
});

const initState: State = {
  searchVal: '',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "MOD":
      return {
        ...state,
        searchVal: action.value,
      };
    default:
      throw new Error();
  }
};

const SearchContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <SearchContext.Provider value={{ searchVal: state.searchVal, SearchContextDispatch: dispatch}}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };
