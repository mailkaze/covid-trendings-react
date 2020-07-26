import React from 'react'
import styled from 'styled-components'
import Global from './global'
import CountryCard from './country-card'
// import CountryDataCard from './country-data-card'
import { useSelector } from 'react-redux'

const CardsContainerStyled = styled.div`
  width: 100%;
  margin-top: 8px;
`

export default function  CardsContainer() { 
  const matchCountries = useSelector(state => state.matchCountries)
  const country = useSelector(state => state.country)

  return (
    < CardsContainerStyled>
      { 
        matchCountries.length === 0 && Object.keys(country).length === 0 &&
        <Global />
      }
      {
        matchCountries.map(m =>
          <CountryCard flag={m.flag} key={m.slug} name={m.names[0]} />
        )
      }
      {/* <CountryDataCard /> */}
    </ CardsContainerStyled>
  )
}