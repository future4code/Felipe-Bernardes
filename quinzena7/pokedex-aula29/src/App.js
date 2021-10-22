import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "././componentes/pokecard.js";

export default function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then((res) => {
        setPokeList(res.data.results);

        console.log(res.data);
      })
      .catch((err) => {
        alert("Algo deu errado");
      });
  }, []);

  const changePokeName = (e) => {
    setPokeName(e.target.value);
  };
  console.log("pokelist", pokeList);
  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}> Nenhum </option>
        {pokeList.map((pokemon) => (
          <option value={pokemon.name}>{pokemon.name}</option>
        ))}
      </select>

      {pokeName && <PokeCard pokeName={pokeName} />}
    </div>
  );
}