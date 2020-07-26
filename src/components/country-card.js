import React from 'react'
import styled from 'styled-components'

const CountryCardStyled = styled.div`
  background: #fdfffc;
  margin: 8px 0;
  padding: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, .2);
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  transition: .1s;
  &&:active {
    box-shadow: none;
    transform: translateY(3px);
  }
  img {
    width: 22%;
    margin: 0;
    height: 100%;
    object-fit: cover;
  }
  h3 {
    width: 78%;
    margin: 0;
    padding: 0 10px;
    font-size: .95em;
  }
`

export default function CountryCard(props) {
  return (
    <CountryCardStyled className="country-select, card" >
      <img src={props.flag} alt=""/>
      <h3>{props.name}</h3>
    </CountryCardStyled>
  )
}
