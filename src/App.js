import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";
import Menu from "./pages/Menu";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/menu" element={ <Menu/> } />
        <Route path="/404" element={ <Pagenotfound/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
