import { useContext, useEffect, useState} from 'react';
import Parser from '../parser.jsx';
import { ApiContext } from "../context/apiContextProvider";
const Feed = () => {
    const [api, setApi] = useState();

    useEffect(() => {
        const getApi = () => {
            const res = "asdf";
            setApi(res);
        }
        getApi();    
    }, [])
    
    return (
        <p>test</p>
    )
}

export default Feed;