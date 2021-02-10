import React from "react"
import About from "../components/About"
import Brands from "../components/Brands"
import DonationGoal from "../components/DonationGoal"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import HowWeHelp from "../components/HowWeHelp"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <HowWeHelp />
      <DonationGoal />
      <div className="space" style={{height: '400px'}}></div>
      <Brands />
    </Layout>
    <Footer />
  </>
)

export default IndexPage
