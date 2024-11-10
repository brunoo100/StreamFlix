import { useEffect,useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css"

// url da api /movie/now_playing?api_key=abb615b3dd7153f73c6d4ab36a574d7a&language=pt-br


export default function Home() {
  const [flimes , setFlimes] = useState([]);
  const  [loading , setLoading] = useState(true);

    
  useEffect(() => {
    async function loadFlimes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "abb615b3dd7153f73c6d4ab36a574d7a",
          language: "pt-BR",
          page: 1,
        },
      });
      //console.log(response.data.results.slice(0,10));
      setFlimes(response.data.results.slice(0,10));
      setLoading(false)
    }
  
    loadFlimes();
  }, []); 

  if(loading){
    return(
      <div className="loading">
        <h2>Carregando flime...</h2>
      </div>
    )
  }
 return (
   <div className="contaneir">
    <div className="lista-filme">
      {flimes.map((flime)=>{
        return(
          <article  key={flime.id}>
            <h2>{flime.title}</h2>
            <img src={`https://image.tmdb.org/t/p/original/${flime.poster_path}`} alt={flime.title}/>
            <Link to={`/filme/${flime.id}`}>Acessar</Link>

          </article>
        )
      })}
    </div>

   </div>
 );
}