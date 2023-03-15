import Navbar from './navbar';
import Section from './Section';
import logo from './logo.svg';
import './App.css';
import Models from './Models';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Page1 from './page1';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Section/> */}
      {/* <Models/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1/>}/>
        <Route path="/" element={<Page2/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
