import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const baseUrl = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const imgLink = process.env.REACT_APP_IMAGE;
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

const Trendingslider = () => {
  const [tredingMovie, setTredingMovie] = useState([]);
  const [appError, setAppError] = useState("");
  const getTrenddingMovie = async () => {
    try {
      let url = `${baseUrl}/trending/all/day?api_key=${API_KEY}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("treding", data);
      setTredingMovie(data.results);
      setAppError("");
    } catch (error) {
      console.log("erro", error.msg);
      setAppError("erro", error.msg);
    }
  };
  useEffect(() => {
    getTrenddingMovie();
  }, []);

  return (
    <>
      <div className="trending-text"> Trending Now </div>
      <div className="trending-movie">
        <Slider {...settings} className="slider">
          {tredingMovie &&
            tredingMovie.map((movie) => (
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="trending-img"
                  src={`${imgLink}${
                    movie?.poster_path == null
                      ? movie?.backdrop_path
                      : movie?.poster_path
                  }`}
                  alt={movie.title}
                />
              </Link>
            ))}
        </Slider>
      </div>
    </>
  );
};
export default Trendingslider;
