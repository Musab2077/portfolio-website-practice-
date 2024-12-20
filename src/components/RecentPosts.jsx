import React from 'react';

export default function RecentPosts() {
    const number2 = [0, 1];
    const recentPostTitle = ["Making a design system from scratch", "Creating pixel perfect design in figma"];
    const recentPostdate = ["12 Feb 2020", "24 Dec 2022"];
    const recentPostType = ["Design pattern", "Figma, Icon Design"];

    return (
        <div>
            <div className='h-96 bg-sky-100 flex flex-col' id="posts">
                <div className='px-44'>
                    <div className='flex flex-row justify-between py-7' id="recent-posts-and-view-all">
                        <div id="title">
                            <h2>Recent Posts</h2>
                        </div>
                        <div id="view-all">
                            <h2>
                                <button className='hover:underline text-cyan-400 hover:text-cyan-500'>
                                    View All
                                </button>
                            </h2>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between' id="posts">
                        {number2.map((single) =>
                            <div className='box-border bg-white h-72 w-[555px] p-5' id="left-post">
                                <div>
                                    <div className="title">
                                        <h1 className='text-2xl font-semibold'>
                                            {recentPostTitle[single]}
                                        </h1>
                                    </div>
                                    <div className='flex space-x-8 my-10' id="sub-title">
                                        <h1 id='date'>{recentPostdate[single]}</h1>
                                        <h1 className='opacity-65' id='pipe'>|</h1>
                                        <h1 id="post-title">{recentPostType[single]}</h1>
                                    </div>
                                    <div id="information">
                                        <p id='post-short-info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quisquam saepe laudantium rerum fugit distinctio perspiciatis odit voluptate, quaerat eos, itaque sapiente eum numquam nostrum veniam corporis consectetur, explicabo inventore cupiditate fuga eaque? Sapiente nisi odio aut voluptas at et.</p>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
