import React from "react"
import Navbar from './Navbar'
import { createGlobalStyle } from 'styled-components'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'open sans', sans-serif;
  }
  body {
    background-color: #FAF6F2;
  }
  .container {
    width: 90%;
    margin: 0 auto;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
