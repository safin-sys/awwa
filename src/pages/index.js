import React from "react"
import About from "../components/index/About"
import Brands from "../components/index/Brands"
//import DonationBox from "../components/index/DonationBox"
import DonationGoal from "../components/index/DonationGoal"
import FreshContent from "../components/index/FreshContent"
import Hero from "../components/index/Hero"
import HowWeHelp from "../components/index/HowWeHelp"
import Newsletter from "../components/index/Newsletter"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <Hero />
        <About />
        <HowWeHelp />
        <DonationGoal />
        {/* <DonationBox /> */}
        <FreshContent />
      </div>
      <Newsletter />
      <div className="container">
        <Brands />
      </div>
    </Layout>
  </>
)

export default IndexPage