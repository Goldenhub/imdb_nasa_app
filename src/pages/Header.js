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
              <h1 style={{textAlign: 'center', fontSize: '20px', padding: '10px 20px', color: 'rgb(142, 202, 230)', width: 'calc(100% - 40px)'}}>
                <span style={{color: 'rgb(255, 183, 3)'}}>NASA: </span>Picture of the Day
                <div>{new Date(data.date).toDateString()}</div>
              </h1> 
              <img style={{
                display: 'block',
                width: '100%'
              }} src={data.url} alt={data.title} />
            </Fragment>
        }
      </header>
    );
  }
}
