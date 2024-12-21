import React from "react";
import work1 from "./images/work1.png";
import work2 from "./images/work2.png";
import work3 from "./images/work3.png";
import work4 from "./images/work4.png";

export default function Work() {
  const number4 = [0, 1, 2, 3];
  const workImages = [work1, work2, work3, work4];
  const workTitle = [
    "Designing Dashboard",
    "Vibrant Portraits of 2020",
    "36 Days of Malayalam Type",
    "Components",
  ];
  const workYears = [2020, 2018, 2018, 2018];
  const workTypes = [
    "Dashboard",
    "Illustration",
    "Typography",
    "Components, Design",
  ];

  return (
    <div id="work-pictures">
      <div className="pt-16 mb-10 text-5xl font-extrabold">
        <h1 className="">Work</h1>
      </div>
      {number4.map((single) => (
        <>
          <div className="py-6 flex flex-row space-x-3" id="works">
            <div className="h-32 w-56 flex" id="image">
              <img src={workImages[single]} className="" alt="works" />
            </div>
            <div className="flex flex-col justify-evenly" id="information">
              <div id="title">
                <h1>{workTitle[single]}</h1>
              </div>
              <div className="my-2 flex flex-row space-x-12" id="year">
                <span className="py-[1px] px-3 bg-black text-white hover:bg-blue-950 rounded-full">
                  {workYears[single]}
                </span>
                <span className="text-opacity-40 text-black">
                  {workTypes[single]}
                </span>
              </div>
              <div className="mr-9" id="short-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  perferendis esse, doloribus error labore cumque ex praesentium
                  odit laboriosam ratione!
                </p>
              </div>
            </div>
          </div>
          <div className="text-black">
            <hr className="" />
          </div>
        </>
      ))}
    </div>
  );
}
