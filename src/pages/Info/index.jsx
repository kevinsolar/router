import { useParams } from "react-router-dom";


const Info = () => {
   const { id } = useParams()
   //Utilizo do useParams para resgatar o objeto com o ID do meu produto que vai ser apresentado aqui.

   return (
      <section>
         <h1>Mais informações sobre: {id} </h1>
      </section>
   )
}

export default Info;