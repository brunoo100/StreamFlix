import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorito from "./pages/Favorito";
import Err from "./pages/Err";
import Flime from "./pages/Flime";

export default function RoutesaApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorito" element={<Favorito />} />
        <Route path="/filme/:id" element={<Flime />} />

        <Route path="*" element={<Err />} />
      </Routes>
    </BrowserRouter>
  );
}
