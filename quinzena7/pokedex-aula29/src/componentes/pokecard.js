import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokeCard(props) {
  console.log("props", props.pokeName);
  const [pokemon, setPokemon] = useState({});
  
  const axiosFunction = () =>{
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
    .then((response) => {
      console.log("response", response.data);
      setPokemon(response.data);
    })
    .catch((err) => {
      alert("Algo deu errado");
    });

  }
console.log("pokemons", pokemon)
  useEffect(() => {
    
   axiosFunction()
   
  }, [props.pokeName]);
  
  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}