import { useState, useEffect, Fragment } from "react";
import config from "../config.json";
import {HeaderSvg} from "./Svg";

export function Header() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${config.nasa}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <HeaderSvg />;

  if (error) return <HeaderSvg />;
  
  if (!data) return null;

  if (!loading) {
    return (
      <header style={{position: 'relative'}}>
        {
            data.media_type === "video" ?
            <embed type="video/mp4"
                src={data.url}
                width="100%"
                height="100%" 
            />
            :
            <Fragment>
              <h1 className="header__h1">
                <span className="header__h1__span">NASA: </span>Picture of the Day
                <div>{new Date(data.date).toDateString()}</div>
              </h1> 
              <img className="header__img" src={data.url} alt={data.title} />
            </Fragment>
        }
      </header>
    );
  }
}
