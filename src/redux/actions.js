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