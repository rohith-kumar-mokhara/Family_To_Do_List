import * as React from 'react';
import ReviewCard from "../reviewCard/ReviewCard.tsx"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.scss"
import Navbar from '../Navbar/Navbar.tsx';

export interface TestimonialProps {
}
function Arrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default function Testimonials(props: TestimonialProps) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };
  return (
    <div className='testimonial-component'>
      <Navbar />
      <Slider {...settings}>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Slider>
    </div>
  );
}
