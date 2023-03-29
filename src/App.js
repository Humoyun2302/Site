import Navbar from './navbar';
import Section from './Section';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';
import Models from './Models';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Chiron from './page3';
import Bolide from './page4';
import Centodieci from './page5';
import Mistral from './page6';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/about" element={<Page2 />} />
          <Route path="/chiron" element={<Chiron/>} />
          <Route path="/bolide" element={<Bolide/>} />
          <Route path="/centodieci" element={<Centodieci/>} />
          <Route path="/mistral" element={<Mistral/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
