import React from "react";
import "./style/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
const Navigation = () => {
  const [openCategory, setOpenCategory] = useState(true);
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Essentials / Survival",
      nestedCategory: [
        "pocketknife",
        "first-aid Kit",
        "Water Bottle or Canteen",
        "Map and Compass",
        "Whistle",
        "Plastic Bag",
      ],
    },
    {
      id: 2,
      title: "Cooking Gear",
      nestedCategory: [
        "Food",
        "Stove & Fuel",
        "Cookibg kit & utensils",
        "Eating utensils",
        "cup, bowl, plate",
        "dish soap",
      ],
    },
    {
      id: 3,
      title: "Sleep Gear",
      nestedCategory: [
        "Pack & Rain cover",
        "Tent & Stakes",
        "Ground Cloth",
        "Sleeping Bag",
        "Sleeping Pag",
        "Bear /bag, bear bag Rope",
      ],
    },
    {
      id: 4,
      title: "Miscellaneous",
      nestedCategory: [
        "Emergency",
        "Watch",
        "Camera & Phone",
        "Gloves",
        "Hand Warmers",
        "Clothes",
      ],
    },
  ]);
  return (
    <div className="navigation">
      <div className="navigation_container">
        <div className="navigation_left">
          <div
            className="categories"
            onClick={() => setOpenCategory(!openCategory)}
          >
            <div className="categ_left">
              <RxHamburgerMenu /> კატეგორიები
            </div>
            <IoIosArrowDown />
            <div
              className={openCategory ? "category_list" : "category_list open"}
              style={openCategory? {overflow:'hidden'}:null}
            >
              {categories.map((element) => {
                return (
                  <div className="category_each_item">
                    {element.title} <RiArrowRightSLine />
                    <div className="nested_category">
                       {element.nestedCategory.map(e=>{
                        return <div className="nested_child">{e}</div>
                       })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="navigation_menu">
            <Link to="/" className="nav_item">
            მთავარი
            </Link>
            <Link to="contact" className="nav_item">
              კონტაქტი
            </Link>
            <Link to="about" className="nav_item">
              შესახებ
            </Link>
            <Link to="shop" className="nav_item">
              მაღაზია
            </Link>
          </div>
        </div>
        <div className="navigation_right">
          <Link to="#" className="navigation_icon_container">
            <FaHeart className="icon" />
            <div>33</div>
          </Link>
          <Link to="shopcart" className="navigation_icon_container">
            <BsCartFill className="icon" />
            <div>0</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
