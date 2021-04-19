import React from "react";
import { useState, useEffect } from "react";
import PaginationNav from "../components/Paginationnav";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import Trendingslider from "../components/Trendingslider";

import { Alert } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const baseUrl = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const imgLink = process.env.REACT_APP_IMAGE;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Homepage = () => {
  const [page, setPage] = useState(1);
  const [listMovie, setListMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [appError, setAppError] = useState("");

  const getMovie = async () => {
    try {
      let url = `${baseUrl}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("movie", data);
      setListMovie(data.results);
      setAppError("");
    } catch (error) {
      console.log("erro", error.msg);
      setAppError("erro", error.msg);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = `${baseUrl}/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("movie", data);
      setListMovie(data.results);
      setAppError("");
    } catch (error) {
      console.log("erro", error.msg);
      setAppError("erro", error.msg);
    }
  };
  useEffect(() => {
    if (listMovie === "") {
      // first time load the page
      setLoading(true);
      return;
    }
    setLoading(true);
    getMovie();
    setLoading(false);
  }, [page]);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {appError ? (
        <Alert key="1" variant="danger">
          {appError}
        </Alert>
      ) : (
        <></>
      )}
      {loading ? (
        <ClipLoader
          color="#2cfc03"
          loading={loading}
          css={override}
          size={300}
        />
      ) : (
        <div className="body">
          <Trendingslider />
          <SearchForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            searchTerm={searchTerm}
          />
          <div>
            <PaginationNav page={page} setPage={setPage} />
          </div>
          <div className="text-playing">Playing Now</div>

          <div className="movie-container" id="playingnow">
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
        </div>
      )}
    </>
  );
};

export default Homepage;
