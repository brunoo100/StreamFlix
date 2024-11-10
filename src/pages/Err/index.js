import { Link } from "react-router-dom";
import "./err.css";

export default function Err() {
  return (
    <div  className="error">
      <h1>404</h1>
      <h2>Pagina nao encontrada</h2>
      <button>
      <Link  to="/">Voltar para a pagina inicial</Link>
      </button>
    </div>
  );
}
