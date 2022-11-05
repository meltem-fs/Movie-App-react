import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';

const Main = () => {

  const [movie, setMovie] = useState([])
  // !Veri Kullanımı
  const API_KEY = "65cbeea0501b0a1d84546006216b8d56";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  // !film Arama
  // https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=
  // !film detayları için
  // https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}
  // !görüntü için
  //  https://image.tmdb.org/t/p/w1280${poster_path}
  // src

  const getApi = async()=>{
      const {data} = await axios(url)
      setMovie(data.results)
  }

  useEffect(() => {
    getApi()
  
  }, [])
  
    
  return <div className="my-5 pt-4 d-flex flex-wrap gap-5 justify-content-center">
     {movie?.map((movie,index)=>{
    return <MovieCard key={index} movie={movie} />;
      
     })}
  </div>;
}

export default Main;