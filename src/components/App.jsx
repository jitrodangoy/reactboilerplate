import React from 'react'
import { Router } from '@reach/router'

import Header from './layouts/Header'
import Navigation from './layouts/Navigation'
import Main from './layouts/Main'
import Footer from './layouts/Footer'

import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </Main>
      <Footer />
    </>
  )
}

export default App
