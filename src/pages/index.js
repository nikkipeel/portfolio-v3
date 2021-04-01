import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Services from "../components/services"
import Skills from "../components/skills"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header></Header>
    <Services></Services>
    <Skills></Skills>
  </Layout>
)

export default IndexPage
