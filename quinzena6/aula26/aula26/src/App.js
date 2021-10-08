import "./App.css";
import axios from "axios";
import React from "react";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
    Authorization: "felipe-bernardes-banu"
  }
};

export default class App extends React.Component {
  state = {
    usuario: [],
    adcionarUsuario: ""
  };

  componentDidMount() {
    this.pegarUsuario();
  }

  pegarUsuario = () => {
    axios
      .get(url, headers)
      .then((res) => {
        
        this.setState({ usuario: res.data.result.list });
      })
      .catch((err) => console.log(err)); 
  };

  criarUsuario = () => {
    const body = {
      name: this.state.adcionarUsuario
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res);
        this.setState({ adcionarUsuario: "" });
        this.pegarUsuario();
      })
      .catch((err) => console.log(err));
  };

  onChangeAdcionarUsuario = (event) => {
    this.setState({ adcionarUsuario: event.target.value });
  };

  render() {
    const listaUsuario = this.state.usuario.map((usuario) => {
      return <li key={usuario.id}>{usuario.name}</li>;
    });

    return (
      <div className="App">
        <h1>Labenusers</h1>
        <input
        placeholder="Nome"
          value={this.state.adcionarUsuario}
          onChange={this.onChangeAdcionarUsuario}
        />
        
        <input
        placeholder="email"
          value={this.state.adcionarUsuario}
          onChange={this.onChangeAdcionarUsuario}
        />
        <button onClick={this.criarUsuario}>Adicionar</button>
        <ul>{listaUsuario}</ul>
      </div>
    );
  }
}
