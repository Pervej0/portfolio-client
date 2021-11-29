import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import HeroSection from "./Component/HeroSection/HeroSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Component/Contact/Contact";
import Projects from "./Component/Projects/Projects";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            index
            element={[
              <Header key="0" />,
              <HeroSection key="1" />,
              <Projects key="2" />,
              <Contact key="3" />,
              <Footer key="4" />,
            ]}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
