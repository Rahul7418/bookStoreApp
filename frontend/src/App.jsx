import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./about/About";
import Contact from "./contact/contact";
import { useAuth } from "./context/AuthProvider";


function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={authUser? <Courses />: <Navigate to= "/signup" />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
