import { useEffect } from "react";
import Header from "./Header";
import {API_options} from "../utils/constants";
const Browse=()=>{
    const getNowPlayingMovies = async()=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?/page=1",
            API_options
          );
          const json = await data.json();
          
    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[]);
    return (
        <div>
            <Header/>
        </div>
    )
}
export default Browse;