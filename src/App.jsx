import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./components/Pages/About.jsx";
import { Contact } from "./components/Pages/Contact.jsx";
import { Download } from "./components/Pages/Download";
import { Gallery } from "./components/Pages/Gallery";
import { Home } from "./components/Pages/Home.jsx";
import { News } from "./components/Pages/News.jsx";
import { Programs } from "./components/Pages/Programs.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
