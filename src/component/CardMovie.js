import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardMovie = ({ mov }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          {/* <img src="man.jpeg" className="card__image" alt="hu" /> */}
          <img
            src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
            className="card__image"
            alt="hu"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {mov.original_title}</p>
              <p>تاريخ الاصدار:1995-2-10</p>
              <p>عدد المقيمين: انيميشن</p>
              <p>التقييم:8.2 </p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
