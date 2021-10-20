import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

const[curtido, setCurtido] = useState(false)
const[numeroCurtida, setNumeroCurtida] = useState(0)
const[comentando, setComentando] = useState("")
const[numeroComentarios, setNumeroComentarios] = useState(0)
const[comentarios, setComentarios] = useState([])

  const onClickCurtida = () => {
    if(curtido){
      setCurtido(!curtido);
      setNumeroCurtida(numeroCurtida - 1)
    }else {
      setCurtido(!curtido);
      setNumeroCurtida(numeroCurtida + 1)
    }
  };

  const onClickComentario = () => {
    setComentando(!comentando)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]
  }
  const caixaDeComentario = comentando ? (<SecaoComentario enviarComentario={enviarComentario}/>)
  : (comentarios.map (comentario => {
    return (
      <CommentContainer>
        <p>{comentario}</p>
      </CommentContainer>
    )
  }))

  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
        iconeCurtida ={iconeCurtida}
          icone={iconeCoracaoPreto}
          onClickIcone={onClickCurtida}
          // valorContador={numeroCurtidas}
        />

        <IconeComContador
        
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
        
          />
        
      </PostFooter>
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
}

export default Post