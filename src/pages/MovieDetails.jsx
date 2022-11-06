import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState("");
  const [video, setVideo] = useState()

  // !film detayları için
  const API_KEY = "d30a8fd3c99b3b48b8263203351de7ab";
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const videourl = `https://api.themoviedb.org/3/movie/$%7Bid%7D/videos?api_key=${API_KEY}`;

  const getDetail = async () => {
    try {
      const { data } = await axios(url);
      console.log("data", data);
      setDetail(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  
  const getVideo = async () => {
    try {
      const data  = await axios(videourl);
      console.log("data", data);
      setVideo(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getDetail();
    getVideo()
  }, []);
 
  return <div>
    
  </div>;
}

export default MovieDetails