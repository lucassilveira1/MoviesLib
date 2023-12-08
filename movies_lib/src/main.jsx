/* eslint-disable no-unused-vars */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"


// Components
import App from './App.jsx'

// Pages
import Home from './pages/Home/Home.jsx'
import Movie from './pages/Movie/Movie.jsx'
import Search from './pages/Search/Search.jsx'
// Global CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
