import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './componets/Home';
import Navbar from './componets/Navbar';
import About from './componets/About';
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import Footer from './componets/Footer';
import Certification from './componets/Certification';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen overflow-x-hidden">

        <Navbar />

        <div className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Certification" element={<Certification />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
