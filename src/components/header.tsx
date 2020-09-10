import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;
`

export const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      github {
        viewer {
          name
          bio
        }
      }
    }
  `)
  return (
    <Container>
      <h1>{data.github.viewer.name}</h1>
      <p>{data.github.viewer.bio}</p>
    </Container>
  )
}
