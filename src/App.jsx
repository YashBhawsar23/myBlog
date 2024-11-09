import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPost from "./Articles/Article1";
import AboutPage from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Home2 from "./Components/Home2";
import Article from "./Articles/Articles";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Footer /> */}
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/article/:id" element={<ArticlePage />} /> */}
          {/* <BlogPost /> */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home2 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="signup" element={<Signup />} />
          {/* <Article /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
