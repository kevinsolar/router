//CSS
import "./App.css";

//Componentes
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchForm from "./components/SearchForm";

//Pages
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Navbar from "./components/Navbar";
import Produto from "./pages/Produto";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

const url = "http://localhost:3000/produtos";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* 2 - Links com React Router DOM */}
				<Navbar />
            {/* 9 - Search | Busca */}
            <SearchForm />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sobre" element={<Sobre />} />
					{/* 4 - Rota dinamica */}
					<Route path="/produtos/:id" element={<Produto />} />
					{/*
               6 - Nested Routes
                  Preciso criar um elemento que vai ser o responsável por receber e renderizar os elementos compostos.
               */}
					<Route path="/produtos/:id/info" element={<Info />} />

               {/* 9 - Search */}
               <Route path="/search" element={<Search />} />

               {/* 10 - redirect */}
               <Route path="company" element={<Navigate to="/sobre" />} />

               {/* 7 - No match route / página não encontrada */}
               <Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
