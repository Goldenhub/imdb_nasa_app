import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
    </div>
  );
}

export default App;
