import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import ArticleList from "./components/ArticlesList";
import DetailCompomponent from "./components/DetailComponent";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavbarComponent />
      </header>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/details/:id" element={<DetailCompomponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
