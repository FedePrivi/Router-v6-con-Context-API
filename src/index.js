import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';

import Inicio from './routes/Inicio';
import Contacto from "./routes/Contacto.jsx";
import Blog from "./routes/Blog.jsx";
import Post from './routes/Post';
import NoEncontrado from './routes/NoEncontrado';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <BrowserRouter>

      <Routes>

        <Route path='/' element={<App />} >
          <Route index element={<Inicio />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<Post />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='*' element={<NoEncontrado />} />


        </Route>


      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);

