import {Link} from "react-router-dom"
import {Header} from "./Header"
import {Cards} from "./Cards"


export function Home() {
    return (
    <div>
        <Header />
        <main>
            <Cards />
        </main>
        <nav>
            <Link to="movies">About | </Link>
        </nav>
    </div>
    )
}