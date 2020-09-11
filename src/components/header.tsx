import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons"

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;

  a:first-child {
    text-decoration: none;
    color: #0e76a8;
  }

  a:nth-child(2) {
    color: #00acee;
  }
  a:last-child {
    color: #333;
  }

  a:not(:last-child) {
    margin-right: 0.5rem;
  }
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
      <Links>
        <a href="https://www.linkedin.com/in/muhammadibragimov" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/_mibragimov" target="_blank">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a href="https://github.com/mibragimov/" target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </Links>
      <hr />
    </Container>
  )
}
