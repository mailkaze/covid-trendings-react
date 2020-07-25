import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSources } from '../redux/actions'

const SourcesStyled = styled.div`
  z-index: 100;
  width: 200px;
  background: #fdfffc;
  border-radius: 12px;
  position: absolute;
  left: 22vw;
  bottom: 30px;
  margin: 2.5vh 3vw;
  padding: 15px;
  font-size: .7em;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, .2);
  .fa-times {
    float: right;
    cursor: pointer;
    font-size: 1.3em;
  }
  h3 {
    font-size: 1.4em;
    margin: 5px 0;
  }
  a {
    color: #073b4c;   
  }
  p {
    margin: 0;
    text-align: justify;
  }
`

export default function Sources() {
  const sources = useSelector(state => state.lang.sources)
  const dispatch = useDispatch()
  return (
    < SourcesStyled>
      <i className="fas fa-times" onClick={() => dispatch(toggleSources())}></i>
      <h3 id="sourcesTitle">{sources}</h3>
      <p><a href="https://covid19api.com/" target="_blank" rel="noopener noreferrer">COVID19API</a></p>
      <p><a href="https://restcountries.eu/" target="_blank" rel="noopener noreferrer">REST Countries</a></p>
    </ SourcesStyled>
  )
}