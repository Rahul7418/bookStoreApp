import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./contact/Contact"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/Signup" element = {<Signup />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/contact" element = {<Contact />} />
      </Routes>
  );
}

export default App;
