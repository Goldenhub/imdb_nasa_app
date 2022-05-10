import { Link } from "react-router-dom";
import placeholder from '../img/gallery.png';

function Card({ src, id, desc, popularity, title, date }) {

  return (
    <div
      style={{
        background: "#fff",
        color: "rgb(0, 0, 0)",
        padding: "20px",
        border: "1px solid rgb(255, 255, 255)",
        borderRadius: "4px",
      }}
    >
      <Link to={`/movies/${id}`}>
        <div
          style={{
            backgroundImage: `${src ? `url(https://image.tmdb.org/t/p/original${src})` : `url(${placeholder})`}`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            display: "block",
            minHeight: "400px",
            width: "100%",
            margin: "0px 0px 20px",
          }}
        ></div>
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
