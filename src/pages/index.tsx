import React from "react"
import { PageProps } from "gatsby"
import { Layout } from "../components/layout"
import { CardList } from "../components/card-list"

type DataProps = {}

const IndexPage: React.FC<PageProps<DataProps>> = () => {
  return (
    <Layout>
      <CardList />
    </Layout>
  )
}

export default IndexPage
