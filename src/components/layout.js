import React from "react"
import Navbar from './Navbar'
import styled, { createGlobalStyle } from 'styled-components'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'
import Footer from "./Footer"

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
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Watermark />
    </>
  )
}

export default Layout

const WaterCon = styled.div`
  background-color: black;
  .container {
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    min-height: 20px;
    p{
      font-family: monospace;
      font-size: 12px;
      a {
        font-family: monospace;
        color: white;
      }
    }
  }
`;

const Watermark = () => {
  return(
    <WaterCon>
      <div className="container">
        <p>Coded by <a href="https://github.com/safin-sys" target="_blank" rel="noreferrer">Safin Ahmed</a></p>
        <p>Designed by <a href="https://www.thrivelystudio.com/" target="_blank" rel="noreferrer">Nadirah Khaliq</a></p>
      </div>
    </WaterCon>
  )
}