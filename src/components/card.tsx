import React from "react"
import { Node } from "./card-list"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-solid-svg-icons"

interface CardProps {
  item: Node
}

const CardContainer = styled.div`
  height: 100%;
  box-shadow: 0 0.5rem 0.75rem rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease;
  background-color: #fff;
  border: none;

  &:hover {
    transform: translateY(-2px);
  }
`

export const Card: React.FC<CardProps> = ({ item }) => {
  const {
    node: { name, description, url, languages, homepageUrl, repositoryTopics },
  } = item
  return (
    <CardContainer className="card">
      <div className="card-body">
        <h5 className="card-title text-uppercase">{name}</h5>

        <p className="card-text">{description}</p>

        <div>
          {languages.nodes.map(lan => (
            <span
              key={lan.id}
              className="badge mr-1"
              style={{ backgroundColor: `${lan.color}` }}
            >
              {lan.name}
            </span>
          ))}
        </div>
        <div className="mb-2">
          {repositoryTopics.nodes.map(repo => (
            <span
              key={repo.topic.id}
              className="badge bg-secondary mr-1 text-uppercase"
            >
              {repo.topic.name}
            </span>
          ))}
        </div>
        <a
          href={url}
          target="_blank"
          className="card-link text-decoration-none"
        >
          Source Code
        </a>
        {homepageUrl && (
          <a
            href={homepageUrl}
            target="_blank"
            className="card-link text-decoration-none"
          >
            Live
          </a>
        )}
      </div>
    </CardContainer>
  )
}
