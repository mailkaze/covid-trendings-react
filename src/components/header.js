import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  header {
    height: 40px;
    background: #073b4c;
  }
  header a {
      text-decoration: none;
      color: #fdfffc;
  }
  header i {
      color: #06d6a0;
      margin: 8px 8px 0 10px;
  }
  header span {
      font-size: .9em;
  }
`

export default function Header() {
  return (
    <HeaderStyled>
      <header>
        <a href="index.html">
          <i className="fas fa-virus"></i><span>COVID-19 Trendings</span>
        </a>
      </header>
    </HeaderStyled>
  )
}