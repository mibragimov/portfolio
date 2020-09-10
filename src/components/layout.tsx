import React from "react"
import styled from "styled-components"
import { Header } from "./header"

const Container = styled.div`
  font-family: "Aleo";
  background-color: #eee;
`
const Footer = styled.footer`
  text-align: center;
  font-size: 0.8rem;

  a {
    text-decoration: none;
  }
`
type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container className="container-fluid">
      <Header />
      <main>{children}</main>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </Container>
  )
}
