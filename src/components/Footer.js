import React from "react";
import "./style/style.css";
import { MdLocationOn } from "react-icons/md";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="container1">
          <p className="title">GET IN TOUCH</p>
          <p className="description">
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
            et dolor sed dolor. Rebum tempor no vero est magna amet no
          </p>
          <p>
            {" "}
            <MdLocationOn className="icon" /> 123 Street, New York, USA
          </p>
          <p>
            {" "}
            <BsFillEnvelopeFill className="icon" />
            info@example.com
          </p>
          <p>
            {" "}
            <BsTelephoneFill className="icon" />
            +012 345 67890
          </p>
        </div>
        <div className="container2">
          <div className="container2_child">
            <h4 className="title">QUICK SHOP</h4>
            <p>
              {" "}
              <MdOutlineKeyboardArrowRight className="icon" /> Home
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="icon" />
              Our Shop
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="icon" />
              Shop Detail
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="icon" />
              Shop Cart
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="icon" />
              Checkout
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="icon" />
              Contact Us
            </p>
          </div>
          <div className="container2_child">
            <h4 className="title">MY ACCOUNT</h4>
            <p>
              {" "}
              <MdOutlineKeyboardArrowRight className="icon" /> Home
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="icon" />
              Our Shop
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="icon" />
              Shop Detail
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="icon" />
              Shop Cart
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="icon" />
              Checkout
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="icon" />
              Contact Us
            </p>
          </div>
          <div className="container2_child">
            <h4 className="title">NEWSLETTER</h4>
            <p style={{ fontWeight: "600" }}>
              Duo stet tempor ipsum sit amet magna ipsum tempor est
            </p>
            <div className="input_container">
              <input type="text" placeholder="Your Email Address" />
              <button>Sign Up</button>
            </div>

            <p className="follow">FOLLOW US</p>

            <div className="icon_container">
              <div>
                <GrTwitter className="icon" />
              </div>
              <div>
                <FaFacebookF className="icon" />
              </div>
              <div>
                <GrLinkedinOption className="icon" />
              </div>
              <div>
                <RiInstagramFill className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
