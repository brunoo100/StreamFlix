import { Link } from "react-router-dom";

import "./style.css";
export default function Header() {
  return (
    <div>
      <header>
        <h1 className="titulo">
          <Link to='/'>StreamFlix</Link>
        </h1>

        <div>
          <button>
            <Link to="/favorito">Meus flimes</Link>
          </button>
        </div>
      </header>
    </div>
  );
}
