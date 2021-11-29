import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import HeroSection from "./Component/HeroSection/HeroSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Component/Contact/Contact";

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
              <Contact key="2" />,
            ]}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
