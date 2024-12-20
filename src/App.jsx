import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import NavBar from './components/NavBar.jsx';
import Introduction from './components/Introduction.jsx';
import RecentPosts from './components/RecentPosts.jsx';
import Footer from './components/Footer.jsx';
import Works from './components/Works.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Work from './components/Work.jsx';
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <>
          <NavBar />
          <Introduction />
          <RecentPosts />
          <Works />
          <Footer />
        </>
      )
    },
    {
      path: '/works',
      element: (
        <>
          <NavBar work='text-red-400' />
          <div className='px-72'>
            <Work />
          </div>
          <Footer />
        </>
      )
    },
    {
      path: '/contact',
      element: (
        <>
          <NavBar contract='text-red-400' />
          <Contact />
          <Footer />
        </>
      )
    },
    {
      path: '/blog',
      element: (
        <>
          <NavBar blog='text-red-400' />
          <div className='px-72'>
            <Blog />
          </div>
          <Footer />
        </>
      )
    }
  ]
)

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
