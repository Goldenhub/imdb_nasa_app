import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "../config.json";
import './styles/Movie.css';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    (async function(){
        if(!id) return;
        setIsLoading(true);
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${config.imdb}`)
        const data = await response.json();
        setMovie(data);
        setIsLoading(false);
    })();
  }, [id]);

  if (isloading) return <p style={{ color: "#fff" }}>Loading...</p>;
  if (!movie) return null;

  if (!isloading) {
    return (
      <div className="movie">
        {movie.poster_path && <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          layout="responsive"
          alt={movie.title}
          className="movie__img"
        />}
        <h2>
          <strong>Title: </strong>
          {movie.title}
        </h2>
        <h2>
          <strong>Tagline: </strong>
          {movie.tagline}
        </h2>
        <h2>
          <strong>Overview: </strong>
          {movie.overview}
        </h2>
        <h2>
          <strong>Vote Average: </strong>
          {movie.vote_average}
        </h2>
        <h2>
          <strong>Total Votes: </strong>
          {movie.vote_count}
        </h2>
        <h2>
          <strong>Status: </strong>
          {movie.status}
        </h2>
        <h2>
          <strong>IMDB Link: </strong>
          <Link
            to={`https://www.imdb.com/title/${movie.imdb_id}`}
            target="_blank"
            style={{color: '#0000EE'}}
          >
            {movie.imdb_id}
          </Link>
        </h2>
        <h2>
          <strong>Budget: </strong>
          {movie.budget === 0 ? "Unknown budget costs" : movie.budget}
        </h2>
        <h2>
          <strong>Production Countries: </strong>
        </h2>
        <ul>
          {movie.production_countries.length !== 0 && movie.production_countries.map((country, index) => (
            <li key={index}>{country.name}</li>
          ))}
        </ul>
        <h2>
          <strong>Genres: </strong>
        </h2>
        <ul>
          {movie.genres.length !== 0 && movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <h2>
          <strong>Languages: </strong>
        </h2>
        <ul>
          {movie.spoken_languages.length !== 0 && movie.spoken_languages.map((lang, index) => (
              <li key={index}>{lang.name}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Movie;
