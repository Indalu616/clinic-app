import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/Pages/AboutPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/clinic-app" element={<Home />}></Route>
        <Route path="/clinic-app/about" element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
