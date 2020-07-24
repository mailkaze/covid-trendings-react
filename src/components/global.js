import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const GlobalStyled = styled.div`
  padding: 10px;
  background: #fdfffc;
  margin: 8px 0;
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
  const globalTitle = useSelector(state => state.lang.globalTitle)
  const globalNewCases = useSelector(state => state.lang.globalNewCases)
  const globalTotalCases = useSelector(state => state.lang.globalTotalCases)
  const globalCasesPerMillion = useSelector(state => state.lang.globalCasesPerMillion)
  const global = useSelector(state => state.global)
  return (
    <GlobalStyled className="global card" >
      <i className="fas fa-globe-africa"></i>
      <h3 id="globalTitle">{globalTitle}</h3>
      <p id="globalNewCasesP">{globalNewCases}<span id='globalNewConfirmed'>{Intl.NumberFormat().format(global.newConfirmed)}</span></p>
      <p id="globalTotalCasesP">{globalTotalCases}<span id='globalTotal'>{Intl.NumberFormat().format(global.totalConfirmed)}</span></p>
      <p id="globalCasesPerMillionP">{globalCasesPerMillion}<span id='globalCasesPerMillion'>{Intl.NumberFormat().format(global.casesPerMillion)}</span></p>
    </GlobalStyled>
  )
}