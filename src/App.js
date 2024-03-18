// App.js
import "./App.css";
import React,{Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { publicRoutes } from './routes'; // Import the route configuration file
import Spinner from "./utils/Spinner";


function App() {
  return (
    <div className="App">
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
    <Footer />
    <ToastContainer />
  </div>
  );
}

export default App;
