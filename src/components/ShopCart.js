import React, { useState } from "react";
import product1 from "./Images/product-1.jpg";
import product2 from "./Images/product-2.jpg";
import product3 from "./Images/product-3.jpg";
import product4 from "./Images/product-4.jpg";
import product5 from "./Images/product-5.jpg";
import { IoClose } from "react-icons/io5";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
const ShopCart = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Product Name",
      image: product1,
      price: 150,
      total: 150,
      quantity: 1,
    },
    {
      id: 2,
      title: "Product Name",
      image: product2,
      price: 150,
      total: 150,
      quantity: 1,
    },
    {
      id: 3,
      title: "Product Name",
      image: product3,
      price: 150,
      total: 150,
      quantity: 1,
    },
    {
      id: 4,
      title: "Product Name",
      image: product4,
      price: 150,
      total: 150,
      quantity: 1,
    },
    {
      id: 5,
      title: "Product Name",
      image: product5,
      price: 150,
      total: 150,
      quantity: 1,
    },
  ]);
  return (
    <div className="shop_card">
      <div className="shop_card_content">
        <div className="shop_card_header">Home / Shop / Shopping Cart</div>
        <div className="shop_card_two_container">
          <div className="shop_card_left_container">
            <div className="prodact_description_container">
              <div className="description">Products</div>
              <div className="description">Price</div>
              <div className="description">Quantity</div>
              <div className="description">Total</div>
              <div className="description">Remove</div>
            </div>
            <div className="items_container">
              {product.map((element, i) => {
                return (
                  <div className="each_item_container">
                    <div className="each_item">
                      <div className="image_container">
                        <img src={element.image} alt="" />
                      </div>
                      <div>{element.title}</div>
                    </div>
                    <div className="each_item">${element.price}</div>
                    <div className="each_item" style={{gap:'0'}}>
                      <div className="plus_minus">
                        <HiMinus />
                      </div>
                      <div className="amount">1</div>
                      <div className="plus_minus">
                        <HiPlus />
                      </div>
                    </div>
                    <div className="each_item">${element.price}</div>
                    <div className="each_item">
                      <div className="icon_container">
                        <IoClose />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="shop_card_right_container">
            <div className="coupon_container">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
            <div className="header" style={{ marginTop: "2rem" }}>
              <p style={{ fontSize: "1.3rem" }}>CART SUMMARY</p>{" "}
              <div className="line"></div>
            </div>
            <div className="checkout_container">
              <div className="checkout_child">
                <span>Subtotal</span>
                <span>$150</span>
              </div>
              <div className="checkout_child">
                <span>shipping</span>
                <span>$150</span>
              </div>
              <div className="line"></div>
              <div className="checkout_child" style={{fontWeight:'bold', fontSize:'1.3rem'}}>
                <span>Total</span>
                <span>$160</span>
              </div>
              <div className="button_container">
                <button>Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
