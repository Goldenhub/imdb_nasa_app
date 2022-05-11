import { Link } from "react-router-dom";
import placeholder from '../img/gallery.png';
import "./styles/Card.css";

function Card({ src, id, desc, popularity, title, date }) {

  return (
    <div className="card">
      <Link to={`movies/${id}`}>
        <div style={{backgroundImage: `${src ? `url(https://image.tmdb.org/t/p/original${src})` : `url(${placeholder})`}`}} className="card__content"></div>
        <h1>{title}</h1>
        <h4>Description:</h4>
        <p>{desc}</p>
        <p>
          Popularity: <em>{popularity}</em>
        </p>
        <p>
          Release Date: <em>{date}</em>
        </p>
      </Link>
    </div>
  );
}

export default Card;
