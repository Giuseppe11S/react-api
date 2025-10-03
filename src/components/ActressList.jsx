import { useState, useEffect } from "react";
import ActressCard from "./ActressCard";
import axios from "axios";

export default function ActressList() {
  
  const [actresses, setActresses] = useState([]);
  
  function fetchActresses() {

      // chiamata api 
      axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => {
        console.log("Actress:", res.data);
        setActresses(res.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    // l'effetto viene eseguito solo una volta
    fetchActresses();
  }, []);

  return (
    <div className="container">
      <div className="actors">
        {actresses.map((actress) => (
          <ActressCard key={actress.id} actress={actress} />
        ))}

      </div>
    </div>
  );
}
