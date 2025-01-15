import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";

const Home = () => {
	// 3 - Carregamento de dados
	const url = "http://localhost:3000/produtos";

	const { data: items, loading, error } = useFetch(url);

	return (
		<section>
			<h1>Produtos</h1>
			{error && <p>{error}</p>}
			<div className="container-produtos">
				<ul className="produtos">
					{items &&
						items.map((item) => (
							<li key={item.id}>
								<h2>{item.nome}</h2>
								<p>R$ {item.preco}</p>
                        <Link to={`/produtos/${item.id}`}>Detalhes</Link>
							</li>
						))}
				</ul>
			</div>
		</section>
	);
};

export default Home;
