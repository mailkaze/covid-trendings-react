import React from 'react'
import styled from 'styled-components'

const InfoStyled = styled.div`
  z-index: 100;
  max-width: 400px;
  background: #fdfffc;
  border-radius: 12px;
  position: absolute;
  left: 0;
  top: 0;
  margin: 2vh 3vw;
  width: 86vw;
  padding: 15px;
  font-size: .7em;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, .2);
  .fa-times {
     float: right;
     cursor: pointer;
     font-size: 1.3em;
  }
  i {
    font-size: 1.3em;
    margin-right: 3px;
  }
  h3 {
    margin-top: 26px;
    font-size: 1.4em;
  }
  h4 {
    margin-bottom: 3px;
    font-size: 1.1em;
  }
  p {
    margin: 0;
    text-align: justify;
  }
  .little-margin {
    margin-top: 8px;
  }
  .green {
    color: #06d6a0;
    font-weight: 700;
  }
  .red {
    color: #ef476f;
    font-weight: 700;
  }
  button {
    margin-top: 20px;
    border-style: none;
    float: right;
    background: #073b4c;
    color: #fdfffc;
    padding: 10px 24px;
    border-radius: 8px;
    font-size: .9em;
    cursor: pointer;
  }
`

export default function Info() {
  return (
    <InfoStyled>
      <i class="fas fa-times" onclick="toggleInfo()"></i>
      <h3 id="infoTitle"></h3>
      <h4 id="infoCasesPerMillion"></h4>
      <p id="infoP1"></p>
      <p class="little-margin" id="infoP2"></p>
      <h4 id="infoGlobalCasesPerMillion"></h4>
      <p id="infoP3"></p>
      <button onclick="toggleInfo()" id="infoClose"></button>
    </InfoStyled>
  )
}