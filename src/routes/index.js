// routes.js
import React from 'react';
import About from '../Components/About';
import Work from '../Components/Work';
import Testimonial from '../Components/Testimonial';
import Contact from '../Components/Contact';
import Footer from "../Components/Footer";
const Home = React.lazy(() => import('../Components/Home'));
const Login = React.lazy(() => import('../Components/Login'));
export const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/work', element: <Work /> },
  { path: '/testimonial', element: <Testimonial /> },
  { path: '/contact', element: <Contact /> },
  { path: '/login', element: <Login /> },
  { path: '/footer', element: <Footer /> },
];
