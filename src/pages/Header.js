import { useState, useEffect } from "react";
import config from "../config.json";

export function Header() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (!login) return;
    setLoading(true);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${config.nasa}`, {
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
        }
    })
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return (<svg aria-labelledby="0vxnfk8-aria" role="img" viewBox="0 0 500 400"><title id="0vxnfk8-aria">Loading...</title><rect role="presentation" x="0" y="0" width="100%" height="100%" clipPath="url(#0vxnfk8-diff)" style={{'fill':'url(#0vxnfk8-animated-diff)'}}></rect><defs><clipPath id="0vxnfk8-diff"><path d="M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z"></path></clipPath><linearGradient id="0vxnfk8-animated-diff"><stop offset="0%" stopColor="#f5f6f7" stopOpacity="1"><animate attributeName="offset" values="-2; -2; 1" keyTimes="0; 0.25; 1" dur="1.2s" repeatCount="indefinite"></animate></stop><stop offset="50%" stopColor="#eee" stopOpacity="1"><animate attributeName="offset" values="-1; -1; 2" keyTimes="0; 0.25; 1" dur="1.2s" repeatCount="indefinite"></animate></stop><stop offset="100%" stopColor="#f5f6f7" stopOpacity="1"><animate attributeName="offset" values="0; 0; 3" keyTimes="0; 0.25; 1" dur="1.2s" repeatCount="indefinite"></animate></stop></linearGradient></defs></svg>);

  if (error) return (<svg aria-labelledby="0vxnfk8-aria" role="img" viewBox="0 0 500 400"><title id="0vxnfk8-aria">Loading...</title><rect role="presentation" x="0" y="0" width="100%" height="100%" clipPath="url(#0vxnfk8-diff)" style={{'fill':'url(#0vxnfk8-animated-diff)'}}></rect><defs><clipPath id="0vxnfk8-diff"><path d="M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z"></path></clipPath><linearGradient id="0vxnfk8-animated-diff"><stop offset="0%" stopColor="#f5f6f7" stopOpacity="1"><animate attributeName="offset" values="-2; -2; 1" keyTimes="0; 0.25; 1" dur="1.2s" repeatCount="indefinite"></animate></stop><stop offset="50%" stopColor="#eee" stopOpacity="1"><animate attributeName="offset" values="-1; -1; 2" keyTimes="0; 0.25; 1" dur="1.2s" repeatCount="indefinite"></animate></stop><stop offset="100%" stopColor="#f5f6f7" stopOpacity="1"><animate attributeName="offset" values="0; 0; 3" keyTimes="0; 0.25; 1" dur="1.2s" repeatCount="indefinite"></animate></stop></linearGradient></defs></svg>);;
  if (!data) return null;

  if (!loading) {
    return (
      <header style={{height: '40vh'}}>
        {
            data.media_type === "video" ?
            <embed type="video/mp4"
                src={data.url}
                width="100%"
                height="100%" 
            />
            : 
            <img src={data.url} alt={data.title} />
        }
      </header>
    );
  }
}
