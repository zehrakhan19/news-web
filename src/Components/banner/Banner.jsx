import React from "react";
import "./Banner.css";
import { Button } from "@mui/material";
import Marquee from "react-fast-marquee";
import Carousel from "../carousel/Carousel";

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="btn-container">
          <Button variant="contained" className="commonBtn">
            Latest Update
          </Button>
        </div>
        <div className="marqee-container">
          <Marquee className="marquee" pauseOnHover autoFill>
            <div className="content">
              <i className="fa-brands fa-pinterest"></i>
              <div>Latest News</div>
            </div>
          </Marquee>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Banner;
