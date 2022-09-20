import React from 'react';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import VideoDetails from './pages/videoDetails/VideoDetails';

function App() {
  return (
    <div>
        <NavBar />
          <Home />
          <VideoDetails />
        <Footer />
    </div>
  );
}

export default App;
