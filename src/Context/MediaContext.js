import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let ApiContext = createContext("");
function ApiContextProvider(props) {
    let [trendingMovie, setTrendingMovie] = useState([]);
    let [trendingTv, setTrendingTv] = useState([]);
    let [trendingPeople, setTrendingPeople] = useState([]);
    async function getMovieApi(mediaType, callback) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c4299cc882b49c1d2bffebc52a5d9066`);
        callback(data.results)
    }
    useEffect(() => {
        getMovieApi('movie', setTrendingMovie);
        getMovieApi('person', setTrendingPeople);
        getMovieApi('tv', setTrendingTv);
    }, [])
    return <ApiContext.Provider value={{ trendingMovie, trendingTv, trendingPeople }}>
        {props.children}
    </ApiContext.Provider>
}
export default ApiContextProvider;

