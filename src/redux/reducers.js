export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_LANGUAGE':
      return {...state, lang: action.payload}
    case 'SET_GLOBAL':
      return {...state, global: action.payload}
    case 'SET_COUNTRIES':
      return {...state, countries: action.payload}
    case 'TOGGLE_INFO':
      return {...state, showInfo: !state.showInfo}
    case 'TOGGLE_SOURCES':
      return {...state, showSources: !state.showSources} 
    default:
      return state
  }
}