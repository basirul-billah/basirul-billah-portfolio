import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
