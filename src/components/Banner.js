import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import request from "../utils/requests";

import "../scss/Banner.css";

const BASE_URL = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(request.netflixOriginals);
      const results = response.data.results;
      const randomIndex = Math.floor(Math.random() * results.length);

      console.log(results[randomIndex]);
      setMovie(results[randomIndex]);
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${BASE_URL}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner-buttons">
          <button className="banner-buttons-primary">Play</button>
          <button className="banner-buttons-secondary">My List</button>
        </div>

        <h2 className="banner-description">{movie?.overview}</h2>
      </div>
      <div className="banner-fade-bottom" />
    </header>
  );
}

export default Banner;
