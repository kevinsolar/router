import { useParams } from "react-router-dom";
import "./Produto.css";

const Produto = () => {
	// 4 - rota dinamica
	const { id } = useParams();

	return (
		<section>
			<p>ID do produto: {id}</p>
		</section>
	);
};

export default Produto;
