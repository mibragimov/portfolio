import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface DataProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      lang: string
    }
  }
}

export const SEO: React.FC = () => {
  const {
    site: {
      siteMetadata: { title, description, author, lang },
    },
  } = useStaticQuery<DataProps>(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  )
}
