import axios from "axios";
import React from "react";
import styled from "styled-components"

const DivPrincipal = styled.div`
background-color: green;
`

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

  const url2 = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"

const headers = {
  headers: {
    Authorization: "felipe-bernardes-banu"
  }
};

export default class App extends React.Component {
  state = {
    playlists: [],
    nomePlaylist: "",
    musicas: [],
    nomeMusica:"", 
    nomeBanda: "",
    urlMusica: ""
  };

  componentDidMount() {
    this.pegarPlaylists();
  }

  pegarPlaylists = () => {
    axios
      .get(url, headers)
      .then((res) => {
    
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => console.log(err)); 
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.nomePlaylist
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res);
        this.setState({ nomePlaylist: "" });
        this.pegarPlaylists();
      })
      .catch((err) => console.log(err));
  };
  addMusica = () => {
    const body2 = {
      name: "", 
    artist: "",
    url: ""
    };

    axios
      .post(url2, body2, headers)
      .then((res) => {
        console.log(res);
        this.setState({ musicas: [] });
        this.pegarPlaylists();
      })
      .catch((err) => console.log(err));
  };

  onChangeNomePlaylist = (event) => {
    this.setState({ nomePlaylist: event.target.value });
  };
  onChangeNomeMusica = (event) => {
    this.setState({ nomeMusica: event.target.value });
  };
  onChangeNomeBanda = (event) => {
    this.setState({nomeBanda: event.target.value})
  }
  onChangeUrlMusica = (event) => {
    this.setState({urlMusica: event.target.value})
  }

  render() {
    const listaPlaylists = this.state.playlists.map((playlist) => {
      return <li key={playlist.id}>{playlist.name}</li>;
    });

   

    return (
      <div className="App">
        <h1>LabeFy</h1>
        <input
          value={this.state.nomePlaylist}
          onChange={this.onChangeNomePlaylist}
        />
        <input
        placeholder = "Musica"
          value={this.state.nomeMusica}
          onChange={this.onChangeNomeMusica}
        />
        <input
        placeholder = "Banda"
          value={this.state.nomeBanda}
          onChange={this.onChangeNomeBanda}
        />
        <input
        placeholder = "url"
          value={this.state.urlMusica}
          onChange={this.onChangeUrlMusica}
        />
        <button onClick={this.criarPlaylist}>Criar playlist</button>
        <button onClick={this.addMusica}>Criar playlist</button>
        <ul>{listaPlaylists}</ul>
      </div>
    );
  }
}
