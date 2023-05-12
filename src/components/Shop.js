import React, { useState } from "react";
import "./style/style.css";
import { BsWindows } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import product1 from "./Images/product-1.jpg";
import product2 from "./Images/product-2.jpg";
import product3 from "./Images/product-3.jpg";
import product4 from "./Images/product-4.jpg";
import product5 from "./Images/product-5.jpg";
import product6 from "./Images/product-6.jpg";
import product7 from "./Images/product-7.jpg";
import product8 from "./Images/product-8.jpg";
import { FaStar } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { TiArrowSync } from "react-icons/ti";
import { HiOutlineSearch } from "react-icons/hi";
const Shop = () => {
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
    {
      image: product3,
    },
  ]);
  const [listItems1, setListItems1] = useState([
    {
      amount: "100",
      price: "All Price",
    },
    {
      amount: "150",
      price: "$0-$100",
    },
    {
      amount: "295",
      price: "$100-$200",
    },
    {
      amount: "246",
      price: "$200-$300",
    },
    {
      amount: "145",
      price: "$300-$400",
    },
    {
      amount: "168",
      price: "$400-$500",
    },
  ]);
  const [listItems2, setListItems2] = useState([
    {
      amount: "100",
      color: "All Color",
    },
    {
      amount: "150",
      color: "Black",
    },
    {
      amount: "295",
      color: "White",
    },
    {
      amount: "246",
      color: "Red",
    },
    {
      amount: "145",
      color: "Blue",
    },
    {
      amount: "168",
      color: "Green",
    },
    {
      amount: "168",
      color: "Red",
    },
  ]);
  const [listItems3, setListItems3] = useState([
    {
      amount: "100",
      size: "All Size",
    },
    {
      amount: "150",
      size: "XS",
    },
    {
      amount: "295",
      size: "S",
    },
    {
      amount: "246",
      size: "M",
    },
    {
      amount: "145",
      size: "L",
    },
    {
      amount: "168",
      size: "XL",
    },
  ]);

  const [showing, setShowing] = useState(false);
  const [sorting, setSorting] = useState(false);

  return (
    <div className="shop">
      <div className="shop_container">
        <div className="contact_header">Home / Shop / Shop List</div>
        <div className="left_right_container">
          <div className="shop_left_container">
            <div className="each_container">
              <div className="header">
                <p style={{ fontSize: "1.1rem" }}>FILTER BY PRICE</p>{" "}
                <div className="line"></div>
              </div>
              <div className="list">
                {listItems1.map((element, index) => {
                  return (
                    <div key={index} className="list_item">
                      <div className="left">
                        <input
                          id={`chk${index}`}
                          type="checkbox"
                          className="checkbox"
                        />
                        <label htmlFor={`chk${index}`}></label>
                        <p>{element.price}</p>
                      </div>
                      <div className="right">{element.amount}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="each_container">
              <div className="header">
                <p style={{ fontSize: "1.1rem" }}>FILTER BY COLOR</p>{" "}
                <div className="line"></div>
              </div>
              <div className="list">
                {listItems2.map((element, index) => {
                  return (
                    <div key={index} className="list_item">
                      <div className="left">
                        <input type="checkbox" />
                        <p>{element.color}</p>
                      </div>
                      <div className="right">{element.amount}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="each_container">
              <div className="header">
                <p style={{ fontSize: "1.1rem" }}>FILTER BY SIZE</p>{" "}
                <div className="line"></div>
              </div>
              <div className="list">
                {listItems3.map((element, index) => {
                  return (
                    <div key={index} className="list_item">
                      <div className="left">
                        <input type="checkbox" />
                        <p>{element.size}</p>
                      </div>
                      <div className="right">{element.amount}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>{" "}
          <div className="shop_right_container">
            <div className="right_container_header">
              <div className="left">
                <div className="icon_container">
                  {" "}
                  <BsWindows />
                </div>
                <div className="icon_container">
                  <GiHamburgerMenu />
                </div>
              </div>
              <div className="right">
                <div className="dropdown" onClick={() => setSorting(!sorting)}>
                  Sorting <MdArrowDropDown className="ico" />
                  {sorting && (
                    <div className="sorting_dropdown">
                      <div>Latest</div>
                      <div>Popularity</div>
                      <div>Best Rating</div>
                    </div>
                  )}
                </div>
                <div className="dropdown" onClick={() => setShowing(!showing)}>
                  Showing
                  <MdArrowDropDown className="ico" />
                  {showing && (
                    <div className="sorting_dropdown showing">
                      <div>10</div>
                      <div>20</div>
                      <div>30</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="shop_container">
              {product.map((element, i) => {
                return (
                  <div key={i} className="shop_child">
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
            <div className="pagination">
              <div className="previous">Previous</div>
              <div
                className="center"
                style={{
                  backgroundColor: "#ffd333",
                  color: "white",
                  border: "1px solid #ffd333",
                }}
              >
                1
              </div>
              <div className="center">2</div>
              <div className="center">3</div>
              <div className="next">Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
