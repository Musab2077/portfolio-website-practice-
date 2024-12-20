import React from 'react';
// import 

export default function Blog() {
    const numbers = [0,1,2,3];

    return (
        <div>
            <div className='font-semibold text-5xl py-12 mt-9' id="title">Blog</div>
            <div className='' id="blogs-content">
                {numbers.map((single) =>
                    <>
                        <div  id="title">
                            <h1 className='text-3xl font-semibold py-3'>UI Interactions of the week</h1>
                        </div>
                        <div className='flex flex-row mb-3 space-x-4' id="date">
                            <h1 id='date'>12 Feb 2019</h1>
                            <h1 id='pipe'>|</h1>
                            <h1 className='opacity-65' id='type'>Express, Handlebars</h1>
                        </div>
                        <div className='pr-11' id="content">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dolores exercitationem incidunt vitae ratione voluptates suscipit fugit recusandae. Non totam distinctio nulla ratione doloribus nobis.</p>
                        </div>
                        <div className='my-7'>
                            <hr />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
