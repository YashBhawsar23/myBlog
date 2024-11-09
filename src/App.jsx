import "./App.css";
import BlogPost from "./Articles/Article1";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      {/* <BlogPost /> */}
      <Navbar />
      <Home />
      <Footer />
      {/* <Signup /> */}
    </>
  );
}

export default App;
