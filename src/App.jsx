import './App.css'
import Home from './components/Home/Home';
import About from './components/About';
import Navbar from './components/Home/Navbar';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>
   
          <Routes>

            <Route path="/" element={<Navbar />}>
              {/* <Route index element={<Home />} /> */}
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />

              {/* <Route path='' element={<Text />} /> */}

            </Route>

          </Routes>
    </BrowserRouter>
  )
}

