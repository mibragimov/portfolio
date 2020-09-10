import React from "react"
import { PageProps } from "gatsby"
import { Layout } from "../components/layout"
import { CardList } from "../components/card-list"
import { SEO } from "../components/seo"

type DataProps = {}

const IndexPage: React.FC<PageProps<DataProps>> = () => {
  return (
    <Layout>
      <SEO />
      <CardList />
    </Layout>
  )
}

export default IndexPage
