import axios from "axios";
import react, { useState, useEffect } from "react";

export default function TelaMatch(props) {
  const [matches, setMatches] = useState([]);

  const getMatches = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-banu/matches`
      )

      .then((response) => {
        console.log("match", response.data.matches);
        setMatches(response.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div>
      <p> oi</p>
      <button onClick={props.trocaTela}> teste </button>

      {matches.map((perfil, index) => {
        return (
          <div>
            <p>{perfil.name}</p>
            <img src={perfil.photo} alt={perfil.name} />
          </div>
        );
      })}
    </div>
  );
}