import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Search from './components/search'
import CardsContainer from './components/cards-container'
import Info from './components/info'
import Sources from './components/sources'
import Footer from './components/footer'
import Header from './components/header'
import {
  setLanguage,
  setGlobal,
  setCountries
} from './redux/actions'

const AppStyled = styled.div`
  .container {
    width: 90%;
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
  } 
`

function App() {
  const dispatch = useDispatch()
  const es = useSelector(state => state.es)
  const en = useSelector(state => state.en)

  function loadCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => {
      return res.json()
    })
    .then(allCountries => {
      fetch('https://api.covid19api.com/summary')
      .then(res => {
          return res.json()
      })
      .then(covidSummary => {
        const population = 7794798729
        const newConfirmed = covidSummary.Global.NewConfirmed
        const totalConfirmed = covidSummary.Global.TotalConfirmed
        const casesPerMillion = (newConfirmed / population * 1000000).toFixed(2)
        const global = {
          newConfirmed: newConfirmed,
          totalConfirmed: totalConfirmed,
          casesPerMillion: casesPerMillion
        }
        dispatch(setGlobal(global))

        const tempCountries = []
        for (let country of allCountries) { // recorremos todos los países
          for (let covid of covidSummary.Countries){ // recorremos los países con datos del COVID
            if (country.alpha2Code === covid.CountryCode) {
              const names = [covid.Country]
              const translations = Object.values(country.translations)
              translations.map( t => names.push(t))
              const countryData = {
                names: names,
                flag: country.flag,
                countryCode: country.alpha2Code,
                population: country.population,
                slug: covid.Slug
              }
              tempCountries.push(countryData)
            }
          }
        }
        dispatch(setCountries(tempCountries))
      })
    })
}

  useEffect(() => {
    navigator.language.startsWith('es') // select language based on the clients browser
    ? dispatch(setLanguage(es))
    : dispatch(setLanguage(en)) 
    loadCountries()
  }, [dispatch])

  return (
    <AppStyled>
        <Header />
        <div className="container">
          <Search />
          <CardsContainer />
        </div>
        {/* <Info />
        <Sources /> */}
        <Footer />
    </AppStyled>
  );
}

export default App;
