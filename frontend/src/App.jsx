import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./about/About";
import Contact from "./contact/contact";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/Signup" element = {<Signup />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/contact" element = {<Contact />}/>
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
