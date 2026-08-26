import { useState } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./portfolio/HomePage";
import CssPage from "./css-sandbox/CssPage";
import MathWindowCardPage from "./math-window-card/MathWindowCardPage";
import NotFoundPage from "./NotFoundPage";
import Navbar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/css-sandbox" element={<CssPage />} />
        <Route path="/math-window-page" element={<MathWindowCardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
