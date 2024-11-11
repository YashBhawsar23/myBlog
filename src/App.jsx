import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Home2 from "./Components/Home2";
import Article from "./Articles/Articles";
import Notfound from "./Articles/Notfound";
import FeaturedArticles from "./Articles/FeaturedArticles";
import AllArticles from "./Articles/Allarticles";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="featured" element={<FeaturedArticles />} />
          <Route path="/all-articles" element={<AllArticles />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
