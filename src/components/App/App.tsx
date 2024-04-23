import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import MainSlider from "../MainSlider/MainSlider";
import Description from "../Description/Description";
import ImageSlider from "../ImageSlider/ImageSlider";
import Collapse from "../Collapse/Collapse";
import ProductList from "../ProductList/ProductList";
import VideoComponent from "../VideoComponent/VideoComponent";
import Footer from "../Footer/Footer";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="page">
          <MainSlider />
          <Description />
          <ImageSlider />
          <Collapse />
          <ProductList />
          <VideoComponent />
        </main>
        <footer className="footer">
          <Footer/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
