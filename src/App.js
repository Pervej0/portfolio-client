import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-animated-slider/build/horizontal.css";
import Header from "./Component/Header/Header";
import HeroSection from "./Component/HeroSection/HeroSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Component/Contact/Contact";
import Projects from "./Component/Projects/Projects";
import Footer from "./Component/Footer/Footer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useEffect, useState } from "react";
import AboutMe from "./Component/AboutMe/AboutMe";
import Skills from "./Component/Skills/Skills";
import Blogs from "./Component/Blogs/Blogs";
import AboutMeDetails from "./Component/AboutMe/Compo/AboutMeDetails";
import TopBar from "./Component/Header/Compo/TopBar";

function App() {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader
          className="text-center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transfrom: "translate(-50%,-50%))",
          }}
          type="Circles"
          color="#00BFFF"
          height={80}
          width={80}
        />
      ) : (
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route
              path="/"
              index
              element={[
                <Header key={0} />,
                <HeroSection key="1" />,
                <AboutMe key="2" />,
                <Skills key="3" />,
                <Projects key="4" />,
                <Blogs key="5" />,
                <Contact key="6" />,
              ]}
            />
            <Route path="aboutMe" element={<AboutMeDetails />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
