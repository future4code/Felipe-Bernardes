import styled from "styled-components"

export const DivInicial = styled.div`
  width: 400px;
  height: 400px;
  background: grey;
  display:flex
  flex-direction: column
`
export const BotaoLike = styled.button`
padding: 10px;
background: greenyellow;
border-radius: 50px;
box-shadow: 2px 2px 2px blue;
`

export const BotaoDeslike = styled(BotaoLike)`
background: red;
box-shadow: 2px 2px 2px yellow;
`

export const BotaoMatches = styled(BotaoLike)`
background: purple;
`