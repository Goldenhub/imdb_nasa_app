import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Main } from "./Main";

export function Home() {
  return (
    <div>
      <Header />
      <Main />

      <nav>
        <Link to="movies">About | </Link>
      </nav>
    </div>
  );
}
