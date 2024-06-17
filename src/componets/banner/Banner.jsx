import React from "react";
import Slider from "react-slick";
import { image } from "../../image/image";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ padding: "70px 0px", cursor: "pointer" }}>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings}>
        <div>
          <img src={image.image_banner1} alt="" className="image_banner" />
        </div>
        <div>
          <img src={image.image_banner2} alt="" className="image_banner" />
        </div>
        <div>
          <img src={image.image_banner3} alt="" className="image_banner" />
        </div>
        <div>
          <img src={image.image_banner4} alt="" className="image_banner" />
        </div>
        <div>
          <img src={image.image_banner5} alt="" className="image_banner" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
