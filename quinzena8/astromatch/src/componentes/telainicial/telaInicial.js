import React, { useState, useEffect } from "react";
import axios from "axios";
import { DivInicial, BotaoLike, BotaoDeslike } from "./style";

export default function TelaInicial(props) {
  const [chooseProfile, setChooseProfile] = useState({});

  const getChooseProfile = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-banu/person`
      )
      .then((response) => {
        setChooseProfile(response.data.profile);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getChooseProfile();
  }, []);

  const chooseAProfile = (choice) => {
    const Body = {
      id: chooseProfile.id,
      choice: choice
    };

    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-banu/choose-person`,
        Body
      )
      .then((response) => {
        getChooseProfile();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DivInicial>
      <h2>Astromatch</h2><button onClick={props.trocaTela}> Matches </button>
      
      <p> {chooseProfile.name}</p>

      <p>{chooseProfile.bio}</p>
      <p>{chooseProfile.age}</p>
      <img
        style={{ maxWidth: "100px" }}
        src={chooseProfile.photo}
        alt={chooseProfile.name}
      />
      <BotaoDeslike onClick={() => chooseAProfile(false)}>
        Hoje Não
      </BotaoDeslike>
      <BotaoLike onClick={() => chooseAProfile(true)}>
        {" "}
        Ui, vem em mim BB
      </BotaoLike>

      <button onClick={props.limparTela}> limpar Match </button>
    </DivInicial>
  );
}
