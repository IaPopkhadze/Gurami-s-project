import React, { useState } from "react";
import Slider from "react-slick";

import Img1 from "./Images/tent.jpg";
import Img2 from "./Images/jacket.jpg";
import Img3 from "./Images/section1-1.jpg";
import Img4 from "./Images/section1-2.jpg";
import Img5 from "./Images/section1-3.jpg";
import { BsCheckLg } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { CgPhone } from "react-icons/cg";
import category1 from "./Images/cat-1.jpg";
import category2 from "./Images/cat-2.jpg";
import category3 from "./Images/cat-3.jpg";
import category4 from "./Images/cat-4.jpg";
import { FaStar } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { TiArrowSync } from "react-icons/ti";
import { HiOutlineSearch } from "react-icons/hi";
import product1 from "./Images/product-1.jpg";
import product2 from "./Images/product-2.jpg";
import product3 from "./Images/product-3.jpg";
import product4 from "./Images/product-4.jpg";
import product5 from "./Images/product-5.jpg";
import product6 from "./Images/product-6.jpg";
import product7 from "./Images/product-7.jpg";
import product8 from "./Images/product-8.jpg";
import logo1 from './Images/vendor-1.jpg'
import logo2 from './Images/vendor-2.jpg'
import logo3 from './Images/vendor-3.jpg'
import logo4 from './Images/vendor-4.jpg'
import logo5 from './Images/vendor-5.jpg'
import logo6 from './Images/vendor-6.jpg'
import logo7 from './Images/vendor-7.jpg'
import logo8 from './Images/vendor-8.jpg'
import Paralon from './Images/paralon.jpg'

const Home = () => {
  const [product, setProduct] = useState([
    {
      image: product1,
    },
    {
      image: product2,
    },
    {
      image: product3,
    },
    {
      image: product4,
    },
    {
      image: product5,
    },
    {
      image: product6,
    },
    {
      image: product7,
    },
    {
      image: product8,
    },
  ]);
  const sliderImages=[logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8]
  const [section1Data, setSection1Data] = useState([
    {
      img: Img3,
      title: "BECOME ONE WITH NATURE",
      text: "Everything You Need for the Perfect Travel Experience",
    },
    {
      img: Img5,
      title: "SLEEP UNDER THE STARS",
      text: "Special Tent Sale - 15% OFF All Tents",
    },
    {
      img: Img4,
      title: "GET READY FOR THE BIG CHILL",
      text: "Our New Jackets and Vests Collection",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [category, setCategory] = useState([
    {
      image: category1,
      title: "First-Aid kit",
      description: "100 Products",
    },
    {
      image: category2,
      title: "Map and Compases",
      description: "100 Products",
    },
    {
      image: category3,
      title: "Water bottle or Canteen",
      description: "100 Products",
    },
    {
      image: category4,
      title: "Whistle",
      description: "100 Products",
    },
    {
      image: category4,
      title: "Sleeping bag",
      description: "100 Products",
    },
    {
      image: category1,
      title: "Sleeping Pad",
      description: "100 Products",
    },
    {
      image: category2,
      title: "Looking kit",
      description: "100 Products",
    },
    {
      image: category1,
      title: "Food",
      description: "100 Products",
    },
    {
      image: category3,
      title: "Shoes",
      description: "100 Products",
    },
    {
      image: category2,
      title: "Stove & Fuel",
      description: "100 Products",
    },
    {
      image: category4,
      title: "kooking kit",
      description: "100 Products",
    },
    {
      image: category1,
      title: "Watch",
      description: "100 Products",
    },
  ]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="home">
      <div className="home_content">
        <div className="section1">
          <div className="section1_left">
            <img src={section1Data[currentIndex].img} alt="img" />
            <div className="overlay">
              <div className="overlay_content">
                <h1 className="title">{section1Data[currentIndex].title}</h1>
                <p className="txt">{section1Data[currentIndex].text}</p>
                <button>Shop Now</button>
              </div>

              <div className="three_boxes">
                <div
                  onClick={() => setCurrentIndex(0)}
                  style={
                    currentIndex == 0
                      ? { flex: "2", backgroundColor: "whitesmoke" }
                      : { flex: "1" }
                  }
                ></div>
                <div
                  onClick={() => setCurrentIndex(1)}
                  style={
                    currentIndex == 1
                      ? { flex: "2", backgroundColor: "whitesmoke" }
                      : { flex: "1" }
                  }
                ></div>
                <div
                  onClick={() => setCurrentIndex(2)}
                  style={
                    currentIndex == 2
                      ? { flex: "2", backgroundColor: "whitesmoke" }
                      : { flex: "1" }
                  }
                ></div>
              </div>
            </div>
          </div>
          <div className="section1_right">
            <div className="right_side_img">
              <img src={Img1} alt="img" />
              <div className="overlay">
                <p className="save">Save 20%</p>
                <p className="offer">Special Offer</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="right_side_img">
              <img src={Img2} alt="img" />
              <div className="overlay">
                <p className="save">Save 40%</p>
                <p className="offer">Special Offer</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2_child">
            <BsCheckLg className="icon" /> <h6>Quality Product</h6>
          </div>
          <div className="section2_child">
            <FaTruck className="icon" /> <h6>Quality Product</h6>
          </div>
          <div className="section2_child">
            <RiArrowLeftRightFill className="icon" /> <h6>Quality Product</h6>
          </div>
          <div className="section2_child">
            <CgPhone className="icon" /> <h6>Quality Product</h6>
          </div>
        </div>
        <div className="categories">
          <div className="header">
            <p>CATEGORIES</p> <div className="line"></div>
          </div>
          <div className="category_container">
            {category.map((element, i) => {
              return (
                <div key={i} className="category_child">
                  <div className="image_container">
                    <img src={element.image} alt="" />
                  </div>
                  <div className="content_container">
                    <p style={{ fontWeight: "bold" }}>{element.title}</p>
                    <p style={{ color: "#68727a" }}>{element.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="feature">
          <div className="header">
            <p>FEATURE PRODUCTS</p> <div className="line"></div>
          </div>
          <div className="feature_container">
            {product.map((element, i) => {
              return (
                <div key={i} className="feature_child">
                  <div className="image_container">
                    <img src={element.image} alt="" />
                    <div className="image_overlay">
                      <div className="icon_container">
                        <BsCartFill className="icon" />
                      </div>
                      <div className="icon_container">
                        <BsSuitHeart className="icon" />
                      </div>
                      <div className="icon_container">
                        <TiArrowSync className="icon" />
                      </div>
                      <div className="icon_container">
                        <HiOutlineSearch className="icon" />
                      </div>
                    </div>
                  </div>
                  <div className="content_container">
                    <p className="title">product name</p>
                    <div className="price">
                      <div className="current_price">$123.00</div>
                      <div className="old_price">$124.00</div>
                    </div>
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <span className="rate_score">(99)</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="special_offer">
          <div className="img_container">
            <img src={Paralon} alt="" />
            <div className="img_overlay">
               <p>SAVE 20%</p>
               <h2>Special Offer</h2>
               <button>Shop Now</button>
            </div>
          </div>
          <div className="img_container">
            <img src={Paralon} alt="" />
            <div className="img_overlay">
               <p>SAVE 20%</p>
               <h2>Special Offer</h2>
               <button>Shop Now</button>
            </div>
          </div>
   
        </div>
        <div className="feature">
          <div className="header">
            <p>RECENT PRODUCTS</p> <div className="line"></div>
          </div>
          <div className="feature_container">
            {product.map((element, i) => {
              return (
                <div key={i} className="feature_child">
                  <div className="image_container">
                    <img src={element.image} alt="" />
                    <div className="image_overlay">
                      <div className="icon_container">
                        <BsCartFill className="icon" />
                      </div>
                      <div className="icon_container">
                        <BsSuitHeart className="icon" />
                      </div>
                      <div className="icon_container">
                        <TiArrowSync className="icon" />
                      </div>
                      <div className="icon_container">
                        <HiOutlineSearch className="icon" />
                      </div>
                    </div>
                  </div>
                  <div className="content_container">
                    <p className="title">product name</p>
                    <div className="price">
                      <div className="current_price">$123.00</div>
                      <div className="old_price">$124.00</div>
                    </div>
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <span className="rate_score">(99)</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="logo_slider">
        <Slider {...settings}>
          {sliderImages.map((element, index) => {
            return (
              <div  key={index}>
                <img className="slider_img" src={element} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
      </div>
    </div>
  );
};

export default Home;
