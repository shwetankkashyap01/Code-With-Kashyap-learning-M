import Home from "./Home/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Courses from "./Courses/Courses";
import About from "./Aboutus/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
