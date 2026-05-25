import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/public/Footer";
import Navbar from "./components/public/Navbar";
import About from "./pages/public/About";
import Home from "./pages/public/Home";
import Menu from "./pages/public/MenuList";
import Contact from "./pages/public/Contact";
import Blog from "./pages/public/Blog";
import Post from "./pages/public/Post";
import Preloader from "./components/public/Preloader";
import OtherPagePreloader from "./components/public/OtherPagePreloader";
import LocationMap from "./pages/public/LocationMap";
import BookATable from "./pages/public/BookATable";

function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  return (
    <BrowserRouter>
      <AppContent isPreloading={isPreloading} setIsPreloading={setIsPreloading} />
    </BrowserRouter>
  );
}

function AppContent({ isPreloading, setIsPreloading }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isPreloading &&
        (isHomePage ? (
          <Preloader onComplete={() => setIsPreloading(false)} />
        ) : (
          <OtherPagePreloader onComplete={() => setIsPreloading(false)} />
        ))}

      <div className={isPreloading ? "hidden" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menus" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/visit-tani-modi" element={<LocationMap />} />
          <Route path="/book-a-table" element={<BookATable />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
