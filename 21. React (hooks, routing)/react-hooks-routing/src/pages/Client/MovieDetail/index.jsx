import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`https://67a46e0e31d0d3a6b78652f0.mockapi.io/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          navigate("/");
        } else {
          setMovie({ ...data });
        }
      });
  }, [id, navigate]);
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "16px" }}>
        Movie Detail with {id}
      </h1>
      <hr />
      <h2 style={{ textAlign: "center" }}>{movie.title}</h2>
      <button
        style={{ display: "block", margin: "10px auto" }}
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </button>
    </>
  );
};

export default MovieDetail;
