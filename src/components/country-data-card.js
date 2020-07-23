import React from 'react'
import styled from 'styled-components'

const CountryDataStyled = styled.div`
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
  .country-select {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    transition: .1s;
  }
  .country-select:active {
    box-shadow: none;
    transform: translateY(3px);
  }
  .country-select img {
    width: 22%;
    margin: 0;
    height: 100%;
    object-fit: cover;
  }
  .country-select h3 {
    width: 78%;
    margin: 0;
    padding: 0 10px;
    font-size: .95em;
  }
  .top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  img{
    width: 33%;
    height: 116px;
    border-radius: 8px;
  }
 .top-text {
    font-size: 0.8em;
    width: 65%;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
  }
  .text p {
    margin: 0;
    text-align: center;
  }
  .text .more-margin-p {
    margin-bottom: 14px;
  }
  .text span {
    font-size: 1.6em;
  }
  .fa-caret-up {
    color: #ef476f;
    font-size: 1.4em;
  }
  .fa-caret-down {
    color: #06d6a0;
    font-size: 1.4em;
  }
  .fa-question-circle {
    vertical-align: text-top;
    font-size: em;
    cursor: pointer;
  }
  .up {
    color: #ef476f;
    /* font-size: 1.4em; */
    font-weight: 700;
  }
  .down {
    color: #06d6a0;
    /* font-size: 1.4em; */
    font-weight: 700;
  }
`

export default function CountryData() {
  return (
    <CountryDataStyled className="country-data ">
      <div class="top">
            <img src={countryData.flag} alt=""/>
            <div class="top-text">
            <h3>{countryData.name}</h3>
            <p>{lang.newCases}<span>{Intl.NumberFormat().format(countryData.casesToday)}</span></p>
            <p>{lang.totalCases}<span>{Intl.NumberFormat().format(countryData.totalCases)}</span></p>
            <p>{lang.population}<span>{Intl.NumberFormat().format(countryData.population)}</span></p>
            </div>
        </div>
        <div class="text" >
            <p>{lang.casesPerMillion}</p>
            <p class="more-margin-p">
                <i class="fas fa-caret-up {countryData.showArrowUp}"></i>
                <i class="fas fa-caret-down {countryData.showArrowDown}"></i>
                <span class={countryData.trending}>{Intl.NumberFormat().format(countryData.newCasesPerMillion.toFixed(2))}</span>
                <i class="far fa-question-circle" onclick="toggleInfo()"></i>
            </p>
            <p>{lang.comparativeGlobalCasesPerMillion}</p>
            <p> 
                <i class="fas fa-caret-up {countryData.showArrowUp2}"></i>
                <i class="fas fa-caret-down {countryData.showArrowDown2}"></i>
                <span class={countryData.comparison}>{Intl.NumberFormat().format(global.casesPerMillion)}</span>
                <i class="far fa-question-circle" onclick="toggleInfo()"></i>
            </p>
        </div>
    </CountryDataStyled>
  )
}
