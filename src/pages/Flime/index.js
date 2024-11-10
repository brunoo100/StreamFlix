import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";
import "./flime-info.css";

export default function Flime() {
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    async function loadFlime() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "abb615b3dd7153f73c6d4ab36a574d7a",
            language: "pt-BR",
            page: 1,
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("filme nao encontrado");
          navigate("/", { replace: true });
          return;
        });
    }

    loadFlime();

    return () => {
      console.log("componente desmontado");
    };
  }, [navigate, id]);
 
  function salvarFlime(){
    const minhaLista =  localStorage.getItem("@minhaLista");
    let filmesSalvos = JSON.parse(minhaLista) || [];
    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id
    === filme.id);
    if(hasFilme){
      toast.warn('Esse flime ja esta na lista')
      return;
      } 
        filmesSalvos.push(filme);
        localStorage.setItem('@minhaLista',  JSON.stringify(filmesSalvos));
        toast.success("flime salvo com sucesso");
  }

  if (loading) {
    return <div className="flime-info">Loading...</div>;
  }


  return (
    <div className="flime-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avalição {filme.vote_average} / 10</strong>

      <div className="aree-buttons">
        <button onClick={salvarFlime}> Salvar</button>
        <button>
          <a
            href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}
            target="blank"
            rel="external"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
