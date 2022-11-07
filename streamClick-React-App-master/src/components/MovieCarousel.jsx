import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row } from "react-bootstrap";
import MovieCard from "./Card";
import { movieData } from "./data/movieData";
import "./styles/components/carousel.css";
import "./js/custom.js";

export default function CustomCarousel() {
  // setting the initial bg and fade effect using useState
  let currentBackground;
  window.innerWidth < 1080
    ? (currentBackground = movieData[0].webBack)
    : (currentBackground = movieData[1].webBack);
  const [currentBg, setCurrentBg] = useState(currentBackground);
  const [timeing, setTimeing] = useState(false);

  // changing the bg according to the movie card
  const changeBG = (indexPrev, indexNext, width) => {
    setTimeing(true);
    let index;
    width < 1080
      ? (index = indexNext)
      : indexNext < 2
      ? (index = indexNext + 1)
      : (index = 0);
    setCurrentBg(movieData[index].webBack);

    // fade effect timeout
    setTimeout(() => {
      setTimeing(false);
    }, 3000);
  };

  {
    const settings = {
      infinite: true,
      speed: 3000,
      slidesToShow:
        window.innerWidth >= 1080 && window.innerWidth < 1200
          ? 1.69
          : window.innerWidth > 1200
          ? 1.68
          : 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      className: "center",
      centerMode: true,
      centerPadding: "0px",
      beforeChange: (prev, next) => {
        changeBG(prev, next, window.innerWidth);
      },
    };
    return (
      <div className="mainContainer">
        <div className="backgroundSlide">
          <img
            src={currentBg}
            alt="bg-images"
            className={timeing ? "fade-in-image" : false}
          />
        </div>
        <Row className="carouselRow">
          <div>
            <Slider {...settings} className="movieSliderHr">
              {movieData.map((card) => {
                return (
                  <MovieCard
                    key={card.movieAltName}
                    mainImage={card.mainImage}
                    ottLogo={card.ottLogo}
                    movieLogo={card.movieLogo}
                    movieAltName={card.movieAltName}
                    seasonNumber={card.seasonNumber}
                    movieCategory={card.movieCategory}
                    IMDBRating={card.IMDBRating}
                    movieSumary={card.movieSumary}
                  />
                );
              })}
            </Slider>
          </div>
        </Row>
      </div>
    );
  }
}
