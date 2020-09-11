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
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  transition: transform 0.2s ease;

  a {
    color: #0366d6;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.7px;
    text-decoration: none;
  }

  p {
    color: #586069;
    font-size: 12px;
    letter-spacing: 0.7px;
  }

  .repo-language-color {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 2px;
  }

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
        <div className="d-flex align-items-center mb-2">
          <svg
            className="mr-2 flex-shrink-0"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill="#999"
              fill-rule="evenodd"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            ></path>
          </svg>
          <a href={url} target="_blank">
            {name}
          </a>

          <div className="ml-auto">
            <svg
              className="octicon octicon-grabber"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill="#999"
                fill-rule="evenodd"
                d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"
              ></path>
            </svg>
          </div>
        </div>

        <p className="card-text my-2 py-2">{description}</p>

        <div className="mb-2">
          {languages.nodes.map(lan => (
            <p className="mb-0 d-inline-block" key={lan.id}>
              <span className="d-inline-block mr-3">
                <span
                  className="repo-language-color"
                  style={{ backgroundColor: `${lan.color}` }}
                ></span>
                <span itemProp="programmingLanguage">{lan.name}</span>
              </span>
            </p>
          ))}
        </div>
        {/* <div className="mb-2">
          {repositoryTopics.nodes.map(repo => (
            <p className="mb-0 d-inline-block" key={repo.topic.id}>
              <span className="d-inline-block mr-3">
                <span
                  className="repo-language-color"
                  style={{ backgroundColor: `#333` }}
                ></span>
                <span itemProp="programmingLanguage">{repo.topic.name}</span>
              </span>
            </p>
          ))}
        </div> */}
        {homepageUrl && (
          <div>
            <svg
              height="16"
              className="flex-shrink-0 mr-2"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              aria-hidden="true"
            >
              <path
                fill="#999"
                fill-rule="evenodd"
                d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
              ></path>
            </svg>

            {
              <a
                href={homepageUrl}
                target="_blank"
                className="card-link text-decoration-none"
              >
                {homepageUrl}
              </a>
            }
          </div>
        )}
      </div>
    </CardContainer>
  )
}
