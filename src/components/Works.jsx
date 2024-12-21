import React from "react";
import work1 from "./images/work1.png";
import work2 from "./images/work2.png";
import work3 from "./images/work3.png";

export default function Works() {
  const number3 = [0, 1, 2];
  const workImages = [work1, work2, work3];
  const workTitle = [
    "Designing Dashboard",
    "Vibrant Portraits of 2020",
    "36 Days of Malayalam Type",
  ];
  const workYears = [2020, 2022, 2023];
  const workTypes = ["Dashboard", "Illustration", "Typography"];

  return (
    <div>
      <div className="px-44 py-10" id="works">
        <div className="mb-8" id="title">
          <h1>Featured Works</h1>
        </div>
        <div id="work-pictures">
          {number3.map((single) => (
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa perferendis esse, doloribus error labore cumque ex
                      praesentium odit laboriosam ratione!
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
      </div>
    </div>
  );
}
