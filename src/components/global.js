import React from 'react'
import styled from 'styled-components'

const GlobalStyled = styled.div`
  padding: 10px;
  background: #fdfffc;
  margin: 8px 0;
  padding: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, .2);
  .fa-globe-africa {
    /* display: inline-block; */
    color: #118ab2;
    font-size: 2em;
    margin: 0 5px 5px 0;
    vertical-align: top;
  }
  .text {
    padding: 8px;
  }
  h3 {
    margin: 0;
    display: inline-block;
  }
  p {
    margin: 6px 0;
  }
  span {
    font-weight: 700;
  }
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
`

export default function Global() {
  return (
    <GlobalStyled className="global card" >
      <i class="fas fa-globe-africa"></i>
      <h3 id="globalTitle"></h3>
      <p id="globalNewCasesP"></p>
      <p id="globalTotalCasesP"></p>
      <p id="globalCasesPerMillionP"></p>
    </GlobalStyled>
  )
}