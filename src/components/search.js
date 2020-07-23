import React from 'react'
import styled from 'styled-components'

const SearchStyled = styled.div`
  position: relative;
  #country-search {
      margin-top: 12px;
      border-style: none;
      padding: 4px 10px;
      font-size: 1em;
      border-radius: 14px;
      height: 30px;
  }
  .fa-search {
      position: absolute;
      top: 21px;
      right: 9px;
      cursor: pointer;
  }
`

export default function Search() {
  return (
    <SearchStyled className="search">
      <input
        type="text"
        id="country-search"
        placeholder="Busca tu país ..."
      />
      <i className="fas fa-search"></i>
    </SearchStyled>
  )
}
