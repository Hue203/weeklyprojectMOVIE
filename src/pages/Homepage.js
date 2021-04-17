import React from "react";
import { useState, useEffect } from "react";
import PaginationNav from "../components/Paginationnav";
import { Link } from "react-router-dom";
const baseUrl = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const imgLink = process.env.REACT_APP_IMAGE;

const Homepage = () => {
  // let movie_id = 550;
  const [page, setPage] = useState(1);
  const [listMovie, setListMovie] = useState([]);
  // const [movieId, setMovieId] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [appError, setAppError] = useState("");

  const getMovie = async () => {
    try {
      let url = `${baseUrl}/discover/movie?api_key=${API_KEY}&page=${page}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("movie", data);
      setListMovie(data.results);
      // setPage(data.page);
      // console.log(setPage);
    } catch (error) {
      console.log("erro", error.msg);
    }
  };
  useEffect(() => {
    // if (movieId === ""){
    //   setLoading(true);
    //   return;
    // }
    getMovie();
  }, [page]);

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <>
      <PaginationNav page={page} setPage={setPage} />

      <div className="movie-container">
        {listMovie &&
          listMovie.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <div className="movie">
                <img
                  src={`${imgLink}${
                    movie?.poster_path == null
                      ? movie?.backdrop_path
                      : movie?.poster_path
                  }`}
                  alt={movie.title}
                />
                <div className="movie-info">
                  <p>
                    <strong>{movie.title}</strong>
                  </p>
                  <span>{movie.vote_average}</span>
                </div>
                <div className="movie-overview">
                  <h3>Overview:</h3>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Homepage;
