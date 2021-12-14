import React from "react";
import MenuBar from "./components/MenuBar";
import Carousel, { CarouselItem } from "./components/Carousel";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const carouselPhotos = [
    {
        id: 'p1',
        title: 'photo1',
        URL: 'https://www.ikyf.org/images/index_s/main06.jpg'
    },
    {
        id: 'p2',
        title: 'photo2',
        URL: 'https://www.ikyf.org/images/index_s/main05.jpg'
    },
    {
        id: 'p3',
        title: 'photo3',
        URL: 'https://www.ikyf.org/images/index_s/main07.jpg'
    }
    
]
  return (
    <div className="App">
      <div id="navbar">
        {/* insert component here */}
        <MenuBar />
      </div>
    <Carousel>
      <CarouselItem><img src={carouselPhotos[0].URL} /></CarouselItem>
      <CarouselItem><img src={carouselPhotos[1].URL} /></CarouselItem>
      <CarouselItem><img src={carouselPhotos[2].URL} /></CarouselItem>
    </Carousel>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
