import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import moment from "moment";
const baseUrl = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const imgLink = process.env.REACT_APP_IMAGE;

const Detailpage = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  let history = useHistory();
  const getMovieDetail = async () => {
    try {
      let url = `${baseUrl}/movie/${id}?api_key=${API_KEY}&language=en-US`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("detailmovie", data);
      setMovieDetail(data);
      // setPage(data.page);
      // console.log(setPage);
    } catch (error) {
      console.log("erro", error.msg);
    }
  };
  useEffect(() => {
    getMovieDetail();
  }, []);

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <>
      <div className="container-moviedetail">
        <img
          className="img-detail"
          src={`${imgLink}${
            movieDetail?.poster_path == null
              ? movieDetail?.backdrop_path
              : movieDetail?.poster_path
          }`}
          alt={movieDetail.title}
        />
        <div className="detailmovie-right-side">
          <div className="title">
            <h1>{`${movieDetail.title} (${moment(
              movieDetail.release_date
            ).fromNow()})`}</h1>
          </div>
          <div className="facts">
            <span className="release">{`Released date: ${movieDetail.release_date}`}</span>
            {/* <span className="genders">{movieDetail.popularity}</span> */}
            <span className="runtime">{`Run Time: ${movieDetail.runtime} minutes`}</span>
            <span className="popularity">{`Popularity: ${movieDetail.popularity}`}</span>
          </div>
          <div className="overview-detail">
            <h3>Overview: </h3>
            <p>{movieDetail.overview}</p>
            <h5>{`Rating ${movieDetail.vote_average} from ${movieDetail.vote_count} votes`}</h5>
          </div>
        </div>
        <div className="detailmovie-left-side"></div>
      </div>
    </>
  );
};

export default Detailpage;
