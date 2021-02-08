import React from "react"
import Navbar from './Navbar'
import { createGlobalStyle } from 'styled-components'
import '@fontsource/open-sans'

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
    width: 85%;
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
