
import { useDispatch } from "react-redux";
import { API_options } from "../../utils/constants";
const useNowPlayingMovies=()=>{const getNowPlayingMovies = async()=>{
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?/page=1",
        API_options
      );
      const json = await data.json();
      
}
useEffect(()=>{
    getNowPlayingMovies();
},[]);}
export default useNowPlayingMovies;