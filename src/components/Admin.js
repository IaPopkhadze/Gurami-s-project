import React from "react";
import img1 from "./Images/adminImages/Settings.svg";
import img2 from "./Images/adminImages/addProduct.svg";
import img3 from "./Images/adminImages/addedProducts.svg";
import img4 from "./Images/adminImages/logout.svg";
import img5 from "./Images/adminImages/soldItems.svg";
import img6 from "./Images/adminImages/trendyshop.svg";
import img7 from "./Images/adminImages/photo@4x.png";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const Admin = () => {
  const [fields, setFields] = useState([]);

  const handleInputChange = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };
  const handleAddFields = () => {
    setFields([...fields, { name: "", parameter: "" }]);
  };
  const handleDeleteField = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  return (
    <div className="admin">
      <div className="admin_navigation">
        <div className="top">
          {" "}
          <div className="nav_child">
            <img src={img6} alt="" />
          </div>
          <div className="nav_child">
            <img src={img1} alt="" />
          </div>
          <div className="nav_child">
            <img src={img2} alt="" />
          </div>
          <div className="nav_child">
            <img src={img3} alt="" />
          </div>
          <div className="nav_child">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="bottom nav_child">
          <img src={img4} alt="" />
        </div>
      </div>

      <div className="admin_layout">
        <div className="admin_header">
          <div className="left">პროდუქტის დამატება</div>
          <div className="right">დამატება</div>
        </div>
        <div className="add_product_container">
          <div className="left_container">
            <div className="input_container">
              <p className="title">ძირითადი ინფორმაცია</p>

              <div className="input_fields">
                <input type="text" placeholder="პროდუქტის დასახელება" />
                <input type="text" placeholder="პროდუქტის ფასი" />
                <input type="text" placeholder="პროდუქტის ფასდაკლება" />
                <input type="text" placeholder="რაოდენობა" />
              </div>
              <textarea className="description" placeholder="აღწერა..." name="" id=""></textarea>
            </div>
            <div className="image_container">
              <img src={img7} alt="" />
            </div>
          </div>

          <div className="right_container">
            <div className="header">
              <p className="add">დეტალები</p>
              <button className="btn" onClick={handleAddFields}>
                +
              </button>
            </div>
            <div className="content">
              {fields.map((field, index) => (
                <div className="input_field_container" key={index}>
                  <input type="text" placeholder="სახელწოდება" name="name" value={field.name} onChange={(event) => handleInputChange(index, event)} style={{ marginRight: "1rem" }} />
                  <input type="text" placeholder="პარამეტრი" name="parameter" value={field.parameter} onChange={(event) => handleInputChange(index, event)} />
                  <IoClose className="delete" onClick={()=>handleDeleteField(index)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
