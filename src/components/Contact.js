import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_container">
        <div className="contact_header">
          <span className="navigation_link"> Home </span> / Contact
        </div>
        <div className="header">
          <p>CONTACT US</p> <div className="line"></div>
        </div>
        <div className="contact_containers">
          <div className="left">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div className="btn_container">
              <button>Send Message</button>
            </div>
          </div>
          <div className="right">
            <div
              className="map"
              style={{
                overflow: "hidden",
              }}
            >
              <iframe
                style={{ width: "100%", height: "300px", border: 0 }}
                src="https://maps.google.com/maps?width=1025&amp;height=273&amp;hl=en&amp;q=tiflisi palace&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            <div className="right_content">
              <p>
                <MdLocationOn className="icon" /> 123 Street, New York, USA
              </p>
              <p>
                <BsFillEnvelopeFill className="icon" />
                info@example.com
              </p>
              <p>
                <BsTelephoneFill className="icon" />
                +012 345 67890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
