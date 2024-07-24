import { useEffect } from 'react';
import {options} from '../utils/constants/constants'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
const useNowPlayingMovies = async () => {
    const dispatch = useDispatch()
    const getNowPlaying = async () => {
        
        const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1`,options );
        const json = await data.json() // to get readable stream
        console.log(json)
        dispatch(addNowPlayingMovies(json.results))
      }
      useEffect(()=>{
        console.log("Hello World")  
        getNowPlaying()
      }, [])
}


  export default useNowPlayingMovies