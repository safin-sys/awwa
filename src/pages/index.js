import React from "react"
import About from "../components/About"
import DonationGoal from "../components/DonationGoal"
import Hero from "../components/Hero"
import HowWeHelp from "../components/HowWeHelp"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <HowWeHelp />
    <DonationGoal />
    <div className="space" style={{height: '400px'}}></div>
  </Layout>
)

export default IndexPage
