import Navbar from './navbar';
import Section from './Section';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';
import Models from './Models';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/about" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
