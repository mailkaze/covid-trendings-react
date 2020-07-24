export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_LANGUAGE':
      {console.log('mando el lang al store')
      return {...state, lang: action.payload}}
    case 'SET_GLOBAL':
      {console.log('mando el global al store')
      return {...state, global: action.payload}}
    case 'SET_COUNTRIES':
     {console.log('mando el countries al store')
      return {...state, countries: action.payload}}
    default:
      return state
  }
}