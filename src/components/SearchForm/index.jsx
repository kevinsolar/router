import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchForm = () => {
   const navigate = useNavigate();
   const [query, setQuery] = useState();

   const handleSubmit = (e) => {
      e.preventDefault()

      // navigate("/search?q=" + query) -> fiz a alteração para o nome do produto, pois nao estava funcionando.
      navigate("/search?name=" + query)
   }

   return (
      <form onSubmit={handleSubmit}>
         <input type="text" onChange={(e) => setQuery(e.target.value)} />
         <input type="submit" value="Buscar" />
      </form>
   )
}

export default SearchForm;