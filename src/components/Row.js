import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import "../scss/Row.css";

const BASE_URL = "https://image.tmdb.org/t/p/original";

function Row(props) {
  const { title, url, isLargeRow = false } = props;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      console.log(request.data.results);
      setMovies(request.data.results);
    }

    fetchData();
  }, [url]);

  return (
    <div className="neflix-row">
      <h2>{title}</h2>
      <div className="netflix-row-movies">
        {movies.map((movie) => (
          <img
            className={`netflix-row-movies-img ${
              isLargeRow ? "row-large" : ""
            }`}
            key={movie.id}
            src={`${BASE_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
