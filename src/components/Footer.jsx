import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { RxInstagramLogo } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
// import { useNavigate } from 'react-router';

export default function Footer() {
  const number4 = [0, 1, 2, 3];
  const accountIcons = [
    <AiFillFacebook className="size-9 hover:text-cyan-800" />,
    <RxInstagramLogo className="size-9 hover:text-cyan-800" />,
    <FaTwitter className="size-9 hover:text-cyan-800" />,
    <ImLinkedin className="size-9 hover:text-cyan-800" />,
  ];
  const accountLinks = [
    "https://www.facebook.com/profile.php?id=100034946321140",
    "https://www.instagram.com/midster3/",
    "https://x.com/MuhammadMU32408",
    "https://www.linkedin.com/in/muhammad-musab-37a2312a5/",
  ];
  // const navigate = useNavigate();

  return (
    <div>
      <footer>
        <div
          className="flex flex-row justify-center space-x-9 pt-28"
          id="accounts"
        >
          {number4.map((single) => (
            <div>
              <button>
                <a href={`${accountLinks[single]}`}>{accountIcons[single]}</a>
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-2 mb-16">
          <p className="opacity-90">Copyright ©2020 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
