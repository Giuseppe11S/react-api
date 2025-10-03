import { useState, useEffect } from "react";
import ActorCard from "./ActorCard";
import axios from "axios";

export default function ActorsList() {
  
  const [actors, setActors] = useState([]);

  function fetchActors() {

    // chiamata api
    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => {
        console.log("ACTORS:", res.data);
        setActors(res.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    // l'effetto viene eseguito solo una volta
    fetchActors();
  }, []);

  return (
    <div className="container">
      <div className="actors">
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
        
      </div>
    </div>
  );
}
