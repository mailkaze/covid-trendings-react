import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: #073b4c;
  color: #fdfffc;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
      color: #fdfffc;
      text-decoration: none;
  }

  span {
      font-size: 0.7em;
  }

  #sources {
      cursor: pointer;
      padding-top: 2px;
  }

  #separator {
      margin: 0 8px;
  }

  i {
      font-size: 1.2em;
      margin: 0 4px;
  }
`

export default function Footer() {
  const sources = useSelector((store) => store.lang.sources)

  function handleClick() {
    // toggleSources()
  }

  return (
    <FooterStyled>
      <span id="sources" onClick={handleClick}>{sources}</span>
      <span id="separator"> | </span>
      <a href="https://github.com/mailkaze" target="_blank" rel="noopener noreferrer">
        <span>by mailkaze<i className="fab fa-github"></i></span>
      </a>
    </FooterStyled>
  )
}
