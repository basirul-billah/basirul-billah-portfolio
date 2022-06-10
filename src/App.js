import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/projectdetails" element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
