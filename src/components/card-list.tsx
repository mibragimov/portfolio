import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Card } from "./card"

export interface Node {
  node: {
    description: string
    isFork: boolean
    languages: {
      nodes: LanguageNode[]
    }
    name: string
    url: string
    id: string
    repositoryTopics: {
      nodes: Topic[]
    }
    homepageUrl: string
  }
}

interface Topic {
  topic: {
    name: string
    id: string
  }
}

interface LanguageNode {
  color: string
  id: string
  name: string
}

type DataProps = {
  github: {
    viewer: {
      repositories: {
        edges: Node[]
      }
    }
  }
}

export const CardList: React.FC = () => {
  const data = useStaticQuery<DataProps>(
    graphql`
      {
        github {
          viewer {
            repositories(
              last: 20
              privacy: PUBLIC
              orderBy: { field: CREATED_AT, direction: DESC }
            ) {
              edges {
                node {
                  id
                  url
                  name
                  description
                  isFork
                  languages(first: 5) {
                    nodes {
                      color
                      id
                      name
                    }
                  }
                  repositoryTopics(first: 5) {
                    nodes {
                      topic {
                        name
                        id
                      }
                    }
                  }
                  homepageUrl
                }
              }
            }
          }
        }
      }
    `
  )
  const { edges } = data.github.viewer.repositories
  return (
    <div className="container">
      <h3 className="text-center">Projects</h3>

      <div className="row mt-5">
        {edges.map(item => {
          if (item.node.isFork) {
            return null
          }
          return (
            <div className="col-sm-6 col-md-4 mb-3" key={item.node.id}>
              <Card item={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
