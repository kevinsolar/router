import { useState, useEffect } from "react";
import "./App.css";

import { useFetch } from "./hooks/useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const url = "http://localhost:3000/produtos";

function App() {
	const [produtos, setProdutos] = useState([]);
	const [nome, setNome] = useState([]);
	const [preco, setPreco] = useState([]);

	const { data: itens, httpConfig, loading, error } = useFetch(url);

	const handleSubmit = async (submit) => {
		submit.preventDefault();

		const produto = {
			nome,
			preco,
		};
		httpConfig(produto, "POST");

		setNome("");
		setPreco("");
	};

	const handleRemove = (id) => {
		httpConfig(id, "DELETE");
	};

	return (
		<main className="App">
			<h1>Produtos</h1>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
         </BrowserRouter>

			{loading && <p>Carregando...</p>}

			{error && <p>{error}</p>}

			{!error && (
				<ul>
					{itens &&
						itens.map((produto) => (
							<li key={produto.id}>
								{produto.nome} - R$ {produto.preco}
								<button onClick={() => handleRemove(produto.id)}>
									Excluir
								</button>
							</li>
						))}
				</ul>
			)}

			<div className="add-produto">
				<form onSubmit={handleSubmit}>
					<label>
						Nome:
						<input
							type="text"
							value={nome}
							name="nome"
							onChange={(e) => setNome(e.target.value)}
						/>
					</label>
					<label>
						Preço:
						<input
							type="number"
							value={preco}
							name="preco"
							onChange={(e) => setPreco(e.target.value)}
						/>
					</label>
					{!loading && <input type="submit" value="Criar" />}
					{loading && <input type="submit" disabled value="Aguarde" />}
				</form>
			</div>
		</main>
	);
}

export default App;
