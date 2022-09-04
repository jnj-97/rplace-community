import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className=" App">
      <Header/>
      <BrowserRouter>
      <Routes>
      
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Canvas" element={<Canvas/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
