import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchTerm } from '../redux/actions'

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
  const dispatch = useDispatch()

  function handlekeyUp(e) {
    const search = e.target.value.toLowerCase().trim()
    .replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()); // cada palabra pasa a empezar por mayuscula
    dispatch(setSearchTerm(search))
    if (e.keyCode === 13) {
      e.target.value = ''
      dispatch(setSearchTerm(''))
    }
  }

  function handleClick(e) {
    // const search = e.target.value.toLowerCase().trim()
    // .replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()); // cada palabra pasa a empezar por mayuscula
    // dispatch(setSearchTerm(search))
    // e.target.value = ''
    // dispatch(setSearchTerm(''))
  }
  const placeholder = useSelector(state => state.lang.searchPlaceHolder)
  return (
    <SearchStyled className="search">
      <input
        type="text"
        id="country-search"
        placeholder={placeholder}
        onKeyUp={handlekeyUp}
      />
      <i className="fas fa-search" onClick={handleClick} ></i>
    </SearchStyled>
  )
}
