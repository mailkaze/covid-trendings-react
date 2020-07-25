import { createStore } from 'redux'
import reducer from './reducers'

const initialState = {
  es: {
    searchPlaceHolder: "Busca tu país ...",
    globalTitle: "Situación mundial: ",
    globalNewCases: "Nuevos contagios (hoy): ",
    globalTotalCases: "Casos Totales: ",
    globalCasesPerMillion: "Contagios por millón de habitantes: ",
    newCases: "Nuevos contagios: ",
    totalCases: "Casos totales: ",
    population: "Población: ",
    casesPerMillion: "Contagios por millón de habitantes (hoy): ",
    comparativeGlobalCasesPerMillion: "Contagios mundiales por millón de habitantes (hoy): ",
    infoTitle: "¿Qué significan estos números?",
    infoCasesPerMillion: "Contagios por millón de habitantes (hoy)",
    infoP1: "Proporciona una idea más ajustada de la gravedad de la epidemia, sin importar la cantidad de habitantes.",
    infoP2a: "Se muestra en ",
    infoP2b: "VERDE",
    infoP2c:  ` si hoy se han contagiado menos personas que la media de la semana anterior y puede indicar que la 
              situación está mejorando, de lo contrario se mostrará en `,
    infoP2d: "ROJO",
    infoGlobalCasesPerMillion: "Contagios mundiales por millón de habitantes (hoy)",
    infoP3a: "Se mostrará en ",
    infoP3b: "VERDE",
    infoP3c: ` cuando el índice de contagios por millón de habitantes del país consultado es menor que el
              índice mundial, puede significar que este país está enfrentando la epidemia de un modo más 
              eficaz que la mayoria de los países. De lo contrario se mostrará en `,
    infoP3d: "ROJO",
    infoClose: "Cerrar",
    sources: "Fuentes"
  },
  en: {
    searchPlaceHolder: "Search your country ...",
    globalTitle: "World situation: ",
    globalNewCases: "New infections (today): <span id='globalNewConfirmed'></span>",
    globalTotalCases: "Total cases: <span id='globalTotal'></span>",
    globalCasesPerMillion: "Infections per million inhabitants: <span id='globalCasesPerMillion'></span>",
    newCases: "New infections: ",
    totalCases: "Total cases: ",
    population: "Population: ",
    casesPerMillion: "Infections per million inhabitants (today): ",
    comparativeGlobalCasesPerMillion: "World infections per million inhabitants (today):",
    infoTitle: "<i class='fas fa-info-circle' ></i> What do these numbers mean?",
    infoCasesPerMillion: "Infections per million inhabitants (today)",
    infoP1: "It provides a better idea of the severity of the epidemic, regardless of the country's population.",
    infoP2a: "It is displayed in ",
    infoP2b: "GREEN",
    infoP2c:  ` if fewer people have been infected today than the average of the previous week and may indicate 
                that the situation is improving, otherwise it will be displayed in `,
    infoP2d: "RED",
    infoGlobalCasesPerMillion: "World infections per million inhabitants (today)",
    infoP3a: "It will be displayed in ",
    infoP3b: "GREEN",
    infoP3c: ` when the rate of infections per million inhabitants of the requested country is less than the 
              global rate, it may mean that this country is facing the epidemic in a more effective way than 
              most countries. Otherwise it will be displayed in `,
    infoP3d: "RED",
    infoClose: "Close",
    sources: "Sources"
  },
  lang: {},
  countries: [],
  global: {},
  showInfo: false,
  showSources: false,
}

export default createStore(reducer, initialState)