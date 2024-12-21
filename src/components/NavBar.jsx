import React from "react";
import { useNavigate } from "react-router";

export default function NavBar(prop) {
  const number3 = [0, 1, 2];
  const navElements = ["Works", "Blog", "Contact"];
  const navigate = useNavigate();
  const navLinks = ["/works", "/blog", "/contact"];
  const propArray = [prop.work, prop.blog, prop.contract];

  return (
    <div className="">
      <nav className="flex h-14  justify-end items-center mr-14">
        <div className="flex flex-row space-x-5" id="full navbar">
          {number3.map((single) => (
            <div id="elements">
              <button
                className={`hover:underline ${propArray[single]}`}
                onClick={() => {
                  navigate(`${navLinks[single]}`);
                }}
              >
                {navElements[single]}
              </button>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
