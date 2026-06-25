import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuscaApreensao from "./BuscaApreensao";
import Politica from "./Politica";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuscaApreensao />} />
        <Route path="/politica-de-privacidade" element={<Politica />} />
      </Routes>
    </BrowserRouter>
  );
}