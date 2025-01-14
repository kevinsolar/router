import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Navbar from "./components/Navbar";

const url = "http://localhost:3000/produtos";

function App() {
	return (
		<div className="App">
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/sobre" element={<Sobre />} />
            </Routes>
         </BrowserRouter>
		</div>
	);
}

export default App;
