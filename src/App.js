import React from 'react';
import store from './redux/store'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import Search from './components/search'
import CardsContainer from './components/cards-container'
import Info from './components/info'
import Sources from './components/sources'
import Footer from './components/footer'
import Header from './components/header'

const AppStyled = styled.div`
  .container {
    width: 90%;
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
  } 
`

function App() {
  return (
    <AppStyled>
      <Provider store={store} >
        <Header />
        <div className="container">
          <Search />
          <CardsContainer />
        </div>
        <Info />
        <Sources />
        <Footer />
      </Provider>
    </AppStyled>
  );
}

export default App;
