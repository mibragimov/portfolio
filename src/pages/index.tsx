import React from "react"
import { PageProps } from "gatsby"
import { Layout } from "../components/layout"
import { CardList } from "../components/card-list"
import { SEO } from "../components/seo"
import { ChartComponent } from "../components/chart"

type DataProps = {}

const IndexPage: React.FC<PageProps<DataProps>> = () => {
  return (
    <Layout>
      <SEO />
      <ChartComponent />
      <CardList />
    </Layout>
  )
}

export default IndexPage
