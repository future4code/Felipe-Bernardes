
import React, { useState } from "react";
import TelaMatch from "./componentes/telamatch/telaMatch";
import TelaInicial from "./componentes/telainicial/telaInicial";
import axios from "axios";

export default function App() {
  const [gerenciarTela, setGerenciarTela] = useState(true);

  const trocaTela = () => {
    setGerenciarTela(!gerenciarTela);
  };

  const limparTela = () => {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-banu/clear`
      )
      .then(() => {
        alert("limpeza realizada")
      })
      .catch((error) => {
        alert(error)
      })
  };

  return (
    <div>
      {gerenciarTela ? (
        <TelaInicial limparTela={limparTela} trocaTela={trocaTela} />
      ) : (
        <TelaMatch limparTela={limparTela} trocaTela={trocaTela} />
      )}
    </div>
  );
}
