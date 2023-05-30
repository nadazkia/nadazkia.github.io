import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Portofolio from "./pages/Portofolio";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
