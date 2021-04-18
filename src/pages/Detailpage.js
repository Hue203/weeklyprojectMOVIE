import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import socreicon from "../images/socreicon.png";

import moment from "moment";
// import Moment from "react-moment";
import { Badge } from "react-bootstrap";
const baseUrl = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const imgLink = process.env.REACT_APP_IMAGE;

const Detailpage = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [comment, setComment] = useState([]);

  const getMovieDetail = async () => {
    try {
      let url = `${baseUrl}/movie/${id}?api_key=${API_KEY}&language=en-US`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("detailmovie", data);
      setMovieDetail(data);
    } catch (error) {
      console.log("erro", error.msg);
    }
  };
  const getComment = async () => {
    try {
      let url = `${baseUrl}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("review", data.results);
      setComment(data.results);
    } catch (error) {
      console.log("erro", error.msg);
    }
  };
  useEffect(() => {
    getMovieDetail();
    getComment();
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
          <div className="detail-title">
            <h2>{`${movieDetail.title} (${moment(
              movieDetail.release_date
            ).fromNow()})`}</h2>
          </div>
          <div className="facts">
            <Badge
              pill
              variant="success"
              className="mr-2"
              style={{ fontSize: "14px" }}
            >
              <span className="release">{`Released date: ${movieDetail.release_date}`}</span>
            </Badge>

            {/* <span className="genders">{movieDetail.popularity}</span> */}
            <Badge
              pill
              variant="success"
              className="mr-2"
              style={{ fontSize: "14px" }}
            >
              <span className="runtime">{`Run Time: ${movieDetail.runtime} minutes`}</span>
            </Badge>

            {/* {movieDetail.genres}
              {movieDetail.genres.map((genre) => ( */}
            {/* <Badge
                pill
                variant="info"
                className="mr-3"
                style={{ fontSize: "15px" }}
              ></Badge> */}

            <Badge
              pill
              variant="success"
              className="mr-2"
              style={{ fontSize: "14px" }}
            >
              <span className="popularity">{`Popularity: ${movieDetail.popularity}`}</span>
            </Badge>
          </div>
          <div className="overview-detail">
            <h4 className="overview-card">Overview: </h4>
            <p>{movieDetail.overview}</p>
            <div>
              <span>
                <img src={socreicon} alt="socreicon" className="score-img" />
              </span>
              <span className="rating">
                <strong>{`Rating ${movieDetail.vote_average} from ${movieDetail.vote_count} votes`}</strong>
              </span>
            </div>
          </div>

          <div className="detailmovie-left-side">
            <h1>abc</h1>
          </div>
        </div>
      </div>
      <div className="review-card">
        <div className="review-title">
          <span>Movie's Review</span>{" "}
        </div>
        <ul className="comments-contents">
          {comment && comment.length ? (
            comment.map((review) => (
              <div className="style-box-comments">
                <div className="top-box-comments">
                  <Badge
                    pill
                    variant="success"
                    className="mr-2"
                    style={{ fontSize: "16px" }}
                  >
                    <span>{`Author: ${review.author}`}</span>
                  </Badge>
                  <Badge
                    pill
                    variant="success"
                    className="mr-2"
                    style={{ fontSize: "16px" }}
                  >
                    <span>{`Rating: ${review.author_details.rating}`}</span>
                  </Badge>
                  <Badge
                    pill
                    variant="success"
                    className="mr-2"
                    style={{ fontSize: "16px" }}
                  >
                    <span>
                      {moment(review.author_details.created_at).fromNow()}
                    </span>
                  </Badge>
                </div>

                <div className="main-review-contents">
                  <p> {review.content}</p>
                </div>
              </div>
            ))
          ) : (
            <li>There is no comment for this movie</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Detailpage;
