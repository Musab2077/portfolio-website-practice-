// import { useState } from 'react'
// import { TbPacman } from "react-icons/tb";
// import faceImage from "./images/person.jpg";
// import work1 from "./images/work1.jpg";
// import work2 from "./images/work2.jfif";
// import work3 from "./images/work3.jpg";
// import axios from 'axios';
// import { useNavigate } from 'react-router';
// import { AiFillFacebook } from "react-icons/ai";
// import { RxInstagramLogo } from "react-icons/rx";
// import { FaTwitter } from "react-icons/fa";
// import { ImLinkedin } from "react-icons/im";
// // import axios from 'axios';

// export default function Page() {
//     const [count, setCount] = useState(0);

//     // const navigate = useNavigate();
//     const number2 = [0, 1];
//     const number3 = [0, 1, 2];
//     const number4 = [0, 1, 2, 3];
//     const navElements = ["Works", "Blog", "Contract"];
//     const recentPostTitle = ["Making a design system from scratch", "Creating pixel perfect design in figma"];
//     const recentPostdate = ["12 Feb 2020", "24 Dec 2022"];
//     const recentPostType = ["Design pattern", "Figma, Icon Design"];
//     const workImages = [work1, work2, work3];
//     const workTitle = ["Designing Dashboard", "Vibrant Portraits of 2020", "36 Days of Malayalam Type"];
//     const workYears = [2020, 2022, 2023];
//     const workTypes = ["Dashboard", "Illustration", "Typography"];
//     const accountIcons = [<AiFillFacebook className='size-9 hover:text-cyan-800' />, <RxInstagramLogo className='size-9 hover:text-cyan-800' />, <FaTwitter className='size-9 hover:text-cyan-800' />, <ImLinkedin className='size-9 hover:text-cyan-800' />]

//     const localHostUrl = "http://127.0.0.1:8000";

//     const handleDownload = () => {
//         axios.get(`${localHostUrl}/download`)
//     }

//     return (
//         <>
//             <div>
//                 <div className=''>
//                     <nav className='flex h-14  justify-end items-center mr-14'>
//                         <div className='flex flex-row space-x-5' id='full navbar'>
//                             {number3.map((single) =>
//                                 <div id='elements'>
//                                     <button className='hover:underline'>{navElements[single]}</button>
//                                 </div>
//                             )}
//                         </div>
//                     </nav>
//                 </div>
//                 <div className='flex flex-row px-32' id="Full introduction">
//                     <div className='h-96 flex flex-col mt-12' id="introduction">
//                         <div className='flex flex-col font-medium text-5xl' id="title-name">
//                             <h2>Hi, I am John,</h2>
//                             <h2>Creative Technologist</h2>
//                         </div>
//                         <div className='my-6 mr-52' id="introduction-text">
//                             <p>
//                                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sit, facere, magni recusandae, aliquam numquam amet accusamus alias repellendus asperiores sequi excepturi saepe beatae praesentium laboriosam ullam. Ullam, voluptas perspiciatis?
//                             </p>
//                         </div>
//                         <div id="download-resume">
//                             <button className='bg-red-400 hover:bg-red-500 p-3 text-white' onClick={handleDownload}>
//                                 Download Resume
//                             </button>
//                         </div>
//                     </div>
//                     <div className='flex items-center' id="picture">
//                         <img className='rounded-md' src={faceImage} alt="person" />
//                     </div>
//                 </div>
//                 <div className='h-96 bg-sky-100 flex flex-col' id="posts">
//                     <div className='px-32'>
//                         <div className='flex flex-row justify-between py-7' id="recent-posts-and-view-all">
//                             <div id="title">
//                                 <h2>Recent Posts</h2>
//                             </div>
//                             <div id="view-all">
//                                 <h2>
//                                     <button className='hover:underline text-cyan-400 hover:text-cyan-500'>
//                                         View All
//                                     </button>
//                                 </h2>
//                             </div>
//                         </div>
//                         <div className='flex flex-row justify-between' id="posts">
//                             {number2.map((single) =>
//                                 <div className='box-border bg-white h-72 w-[555px] p-5' id="left-post">
//                                     <div>
//                                         <div className="title">
//                                             <h1 className='text-2xl font-semibold'>
//                                                 {recentPostTitle[single]}
//                                             </h1>
//                                         </div>
//                                         <div className='flex flex-row justify-around my-10' id="sub-title">
//                                             <h1 id='date'>{recentPostdate[single]}</h1>
//                                             <h1 className='font-bold' id='pipe'>|</h1>
//                                             <h1 id="post-title">{recentPostType[single]}</h1>
//                                         </div>
//                                         <div id="information">
//                                             <p id='post-short-info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quisquam saepe laudantium rerum fugit distinctio perspiciatis odit voluptate, quaerat eos, itaque sapiente eum numquam nostrum veniam corporis consectetur, explicabo inventore cupiditate fuga eaque? Sapiente nisi odio aut voluptas at et.</p>
//                                         </div>
//                                     </div>
//                                 </div>)}
//                         </div>
//                     </div>
//                 </div>
//                 <div className='px-32 py-10' id="works">
//                     <div className='mb-8' id="title">
//                         <h1>Featured Works</h1>
//                     </div>
//                     <div id="work-pictures">
//                         {number3.map((single) =>
//                             <>
//                                 <div className='py-6 flex flex-row space-x-3' id="works">
//                                     <div className='' id="image">
//                                         <img src={workImages[single]} className='h-32 w-48' alt="works" />
//                                     </div>
//                                     <div className='flex flex-col justify-evenly' id="information">
//                                         <div id="title">
//                                             <h1>{workTitle[single]}</h1>
//                                         </div>
//                                         <div className='my-2 flex flex-row space-x-12' id="year">
//                                             <span className='py-[1px] px-3 bg-black text-white hover:bg-blue-950 rounded-full'>{workYears[single]}</span>
//                                             <span className='text-opacity-40 text-black'>{workTypes[single]}</span>
//                                         </div>
//                                         <div className='mr-9' id="short-info">
//                                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis esse, doloribus error labore cumque ex praesentium odit laboriosam ratione!</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='text-black'>
//                                     <hr className='' />
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                 </div>
//                 {/* /////////////////////// */}
//                 <footer>
//                     <div className='flex flex-row justify-center space-x-9 pt-28' id="accounts">
//                         {number4.map((single) =>
//                             <div>
//                                 <button>{accountIcons[single]}</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className='flex justify-center pt-2 mb-16'>
//                         <p className='opacity-90'>Copyright ©2020 All rights reserved</p>
//                     </div>
//                 </footer>
//             </div>
//         </>
//     )
// }

