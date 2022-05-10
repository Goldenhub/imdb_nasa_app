import { useState, useEffect } from "react";
import Card from "./Card";
import config from "../config.json";
import {MainSvg} from "./Svg";


export function Main() {
  const [dataList, setDataList] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async function() {
    setIsLoading(true);
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${config.imdb}&language=en-US&query=NASA&include_adult=false&1`)
    const data = await response.json();
    setDataList(data);
    setIsLoading(false);
    })();
  }, []);
  
  if(isloading) return <MainSvg />

  if(!isloading) {
    return (
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gridGap: "2rem",
          padding: "20px"
        }}
      >
        {dataList.results && dataList.results.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              src={item.poster_path}
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
}
