import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuscaApreensao from "./BuscaApreensao";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuscaApreensao />} />
      </Routes>
    </BrowserRouter>
  );
}