import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Produto.css";

const Produto = () => {
   // 4 - rota dinamica
   /* Esse useParams nos traz um objeto com todos os parametros da URL,
   como nesse caso nos sabemos oque queremos, entao podemos desestruturar com informacao que queremos. */
   const { id } = useParams();

   // 5- Carregamento dado individual
   const url = `http://localhost:3000/produtos/${id}`;
   const { data: produto, loading, error } = useFetch(url);

   console.log(produto);

   return (
      <section>
         <p>ID do produto: {id}</p>

         {error && <p>Ocorreu um erro</p>}
         {loading && <p>Carregando...</p>}

         {produto && (
            <div>
               <h1>{produto.nome}</h1>
               <p>R$ {produto.preco}</p>
            </div>
         )}
      </section>
   );
};

export default Produto;
