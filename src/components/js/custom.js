import $ from "jquery";
import { movieData } from "../data/movieData.js";

$(document).ready(() => {
  // if (window.innerWidth >= 1080) {
  // setInterval(() => {
  //     const allSlider = $(".slick-slide");
  //     allSlider.addClass("zoomedOut", 700);
  //     const activeSlide = $(".slick-active");
  //     activeSlide.next().removeClass("zoomedOut", 700);
  const activeSlide = $(".slick-active");
  const centerSlideIndex = activeSlide.next()[0].getAttribute("data-index");
  $(".movieSliderHr").on(
    "beforeChange",
    function (event, { slideCount: count }, currentSlide, nextSlide) {
      console.log(currentSlide);
    }
  );
  // }, 100);
  // }
});
