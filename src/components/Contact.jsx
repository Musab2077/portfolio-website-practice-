import React, { useState } from "react";
import { GoPersonFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Contact() {
  // const [borderColor, setBorderColor] = useState('');
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const contactInfo = ["Full Name", "Email"];
  const iconsArray = [<GoPersonFill />, <MdEmail />];
  const navigate = useNavigate();

  const localHostUrl = "http://127.0.0.1:8000";

  const handleSumbit = () => {
    axios
      .post(`${localHostUrl}/submit`, {
        username: username,
        email: email,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error occured in the submit button", error);
      });
  };

  return (
    <div>
      <div
        className="bg-blue-50 box-border h-[550px] w-[850px] rounded-3xl"
        id="box"
      >
        <div className="px-12" id="for-all-padding">
          <div className="pt-12" id="header">
            <h1 className="text-5xl font-extrabold ">Contact Form</h1>
          </div>
          <div className="pr-80 py-6" id="information">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              corrupti nulla qui numquam saepe corporis.
            </p>
          </div>
          <div className="" id="inputs">
            <div className="flex flex-row justify-between" id="contact-info">
              {/* {contactInfo.map((single, index) => ( */}
              <div
                className="w-80 h-10 bg-white flex justify-between"
                id="full-name"
              >
                <input
                  className={`pl-2 w-72 h-10`}
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="flex items-center pr-2 opacity-60">
                  <GoPersonFill />
                </span>
              </div>
              <div
                className="w-80 h-10 bg-white flex justify-between"
                id="full-name"
              >
                <input
                  className={`pl-2 w-72 h-10`}
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="flex items-center pr-2 opacity-60">
                  <MdEmail />
                </span>
              </div>
              {/* ))} */}
              {/* <div id="email-address">
                <input className="pl-2" type="text" placeholder="Email" />
              </div> */}
            </div>
            <div
              className="my-5 py-5 box-border bg-white flex justify-between"
              id="subject"
            >
              {/* <div className=""></div> */}
              <h2 className="pl-2">Choose Subject</h2>
              <select>
                <option value="">Order</option>
                <option value="">Consultation</option>
                <option value="">Report</option>
              </select>
            </div>
            <div className="box-border bg-white" id="message">
              <textarea
                className="px-2 h-24 w-full"
                placeholder="Your Message"
                name=""
                id=""
              ></textarea>
            </div>
            <div className="flex flex-row py-7 justify-between" id="buttons">
              <button
                className="bg-black rounded-xl hover:bg-cyan-900 text-white px-24 py-3"
                id="back-to-home"
                onClick={() => navigate("/")}
              >
                Back to home
              </button>
              <button
                className="bg-pink-600  rounded-xl hover:bg-pink-700 text-white px-24 py-3"
                id="submit-now"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
