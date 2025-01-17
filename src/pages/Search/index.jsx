import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Search = () => {
	const [searchParams] = useSearchParams();

	const url = "http://localhost:3000/produtos?" + searchParams;
	const {data: items, loading, error} = useFetch(url);

	return (
		<section>
			<h1>Resultados da busca:</h1>
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
		</section>
	);
};

export default Search;
