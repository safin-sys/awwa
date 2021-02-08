import React from "react"
import About from "../components/About"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
