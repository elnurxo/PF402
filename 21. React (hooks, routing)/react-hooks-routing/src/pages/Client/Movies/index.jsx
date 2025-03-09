import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://67a46e0e31d0d3a6b78652f0.mockapi.io/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies([...data]);
      });
  }, [movies]);
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "22px" }}>Movies</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          marginTop: "16px",
        }}
      >
        {movies &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Movies;
