import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import AboutPage from './Components/AboutPage';
import Work from './Components/Work';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      </BrowserRouter>

      

    </div>
  );
}

export default App;
