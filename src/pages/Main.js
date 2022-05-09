import { useState, useEffect } from "react";
import Card from "./Card";
import config from "../config.json";

export function Main() {
  const [dataList, setDataList] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${config.imdb}&language=en-US&query=NASA&include_adult=false&1`
    )
      .then((response) => response.json())
      .then(setDataList)
      .then(() => setIsLoading(false))
      .catch(setError);
  }, []);
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "2rem",
        padding: "20px"
      }}
    >
      {dataList.results.map((item) => {
        return (
          <Card
            key={item.id}
            src={item.poster_path}
            alt={item.title}
            desc={item.overview}
            popularity={item.popularity}
            title={item.title}
            date={item.release_date}
          />
        );
      })}
    </main>
  );
}
