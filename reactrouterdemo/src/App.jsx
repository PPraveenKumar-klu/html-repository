import { Routes, Route } from "react-router";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Login from "./Login.jsx";
import Navbar from "./Navbar.jsx";
import Errorpage from "./Errorpage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
