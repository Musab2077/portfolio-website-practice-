import React from "react";
import faceImage from "./images/person.png";
import axios from "axios";

export default function Introduction() {
  const localHostUrl = "http://127.0.0.1:8000";

  const handleDownload = () => {
    axios.get(`${localHostUrl}/download`);
  };

  return (
    <div className="flex flex-row px-44" id="Full introduction">
      <div className="h-80 mt-12" id="introduction">
        <div className="flex flex-col font-medium text-5xl" id="title-name">
          <h2>Hi, I am John,</h2>
          <h2>Creative Technologist</h2>
        </div>
        <div className="my-6 pr-12" id="introduction-text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem sit, facere, magni recusandae, aliquam numquam amet
            accusamus alias repellendus asperiores sequi excepturi saepe beatae
            praesentium laboriosam ullam. Ullam, voluptas perspiciatis?
          </p>
        </div>
        <div id="download-resume">
          <button
            className="bg-red-400 hover:bg-red-500 p-3 text-white"
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>
      </div>
      <div className="pt-12 w-96" id="picture">
        <img className="size-48" src={faceImage} alt="person" />
      </div>
    </div>
  );
}
