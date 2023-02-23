import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Career from "./pages/Career";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="career" element={<Career />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;