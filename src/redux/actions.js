export function setLanguage(lang) {
  return {
    type: 'SET_LANGUAGE',
    payload: lang
  }
}

export function setGlobal(global) {
  return {
    type: 'SET_GLOBAL',
    payload: global
  }
}

export function setCountries(countries) {
  return {
    type: 'SET_COUNTRIES',
    payload: countries
  }
}

export function toggleInfo() {
  return {
    type: 'TOGGLE_INFO'
  }
}

export function toggleSources() {
  return {
    type: 'TOGGLE_SOURCES'
  }
}

export function setSearchTerm(searchTerm) {
  return {
    type: 'SET_SEARCH_TERM',
    payload: searchTerm,
  }
}

export function setMatchCountries(match) {
  return {
    type: 'SET_MATCH_COUNTRIES',
    payload: match,
  }
}