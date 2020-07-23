import React from 'react'
import styled from 'styled-components'

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
  return (
    <FooterStyled>
      <span id="sources" onclick="toggleSources()"></span>
      <span id="separator"> | </span>
      <a href="https://github.com/mailkaze" target="_blank">
        <span>by mailkaze<i class="fab fa-github"></i></span>
      </a>
    </FooterStyled>
  )
}
