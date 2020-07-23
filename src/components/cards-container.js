import React from 'react'
import styled from 'styled-components'
import Global from './global'
import CountryDataCard from './country-data-card'

const CardsContainerStyled = styled.div`
  width: 100%;
  margin-top: 8px;
`

export default function  CardsContainer() {
  return (
    < CardsContainerStyled>
      <Global />
      {/* <ard /> */}
    </ CardsContainerStyled>
  )
}