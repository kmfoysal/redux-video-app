import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import VideoDetails from './pages/videoDetails/VideoDetails';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<VideoDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
