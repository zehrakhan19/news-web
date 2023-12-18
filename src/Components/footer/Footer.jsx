import React from "react";
import "./Footer.css";
import { TextField } from "@mui/material";

const Footer = () => {
  const iconTabs = [
    <i className="fa-brands fa-facebook-f"></i>,
    <i className="fa-brands fa-twitter"></i>,
    <i className="fa-solid fa-at"></i>,
    <i className="fa-brands fa-pinterest"></i>,
    <i className="fa-brands fa-linkedin-in"></i>,
  ];
  return (
    <div className="footer-container">
      <div className="content-footer-warpper">
        <div className="content-footer">
          <div className="content-inner-footer">
            <h4>ABOUT US</h4>
            <p className="para-footer">
              The ship set ground on the shore of this uncharted desert isle
              with Gilligan the Skipper too the million aire and his wife. He's
              gainin' on you so you better look alive. He busy revin' up his
              Powerful Mach
            </p>
          </div>
          <div className="content-inner-footer">
            <h4>STAY IN TOUCH</h4>
            <div className="icon-box-footer">
              {iconTabs?.map((icon, i) => (
                <div key={i} className="icons-footer">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="content-footer">
          <h4>POPULAR POST</h4>
          <div className="box-footer">
            <div className="img-box-footer">
              <img src="https://demoxml.com/html/ranzim/images/footer/popular-post-1.png" />
            </div>
            <div className="para-wrapper-footer">
              <h6>Political</h6>
              <p className="para-footer">
                The ship set ground on the shore of this uncharted desert isle
                with Gilligan and his wife.
              </p>
            </div>
          </div>
          <div className="box-footer">
            <div className="img-box-footer">
              <img src="https://demoxml.com/html/ranzim/images/footer/popular-post-1.png" />
            </div>
            <div className="para-wrapper-footer">
              <h6>Entertainment</h6>
              <p className="para-footer">
                The ship set ground on the shore of this uncharted desert isle
                with Gilligan and his wife.
              </p>
            </div>
          </div>
          <div className="box-footer">
            <div className="img-box-footer">
              <img src="https://demoxml.com/html/ranzim/images/footer/popular-post-1.png" />
            </div>
            <div className="para-wrapper-footer">
              <h6>Fashion</h6>
              <p className="para-footer">
                The ship set ground on the shore of this uncharted desert isle
                with Gilligan aire and his wife.
              </p>
            </div>
          </div>
        </div>
        <div className="content-footer">
          <div className="content-inner-footer">
            <h4>NEWSLETTER SIGNUP</h4>
            <p className="para-footer">
              Sign up to our newsletter and get exclusive deals you will not
              find anywhere else straight to your inbox!
            </p>
          </div>
          <div className="input-wrapper-footer">
            <TextField
              id="standard-basic"
              label="Enter Your E-mail"
              variant="standard"
            />
            <i class="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>
      <div className="bottom-tab-footer">
        <div className="inner-bottom-wrapper-footer">
          <p>Copyright © 2023 | All Rights Reserved.</p>
          <p>AMOGHNYA TECH SOLUTIONS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
