import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import PortfolioItem from 'sections/portfolio/parts/PortfolioItem.js'
import AnimatedHeading from 'components/animated-heading'

class PortfolioOne extends React.Component {
    
    render() {

        const Section = styled.section`
          background-color: #050505;
          padding: 100px 0;
        `
        const PortfolioContainer = styled.div`
            padding: 0 50px;
            @media (max-width:767px) {
              padding: 0 50px;
            }
        `

        return (
            <Section id="portfolio">
                  <Col md={12}>
                    <Container>
                      <AnimatedHeading text="Cosmic NFTs" />
                    </Container>
                  <PortfolioContainer>
                      <Row>
                        {this.portfolio()}
                      </Row>
                  </PortfolioContainer>
                </Col>
            </Section>
        )
    }

  portfolio() {
      const { items } = this.props
      
      return items.map((value, index) => {
        return (
          <Col md={8} key={index}>
              <PortfolioItem 
                index={index} 
                image={value.content.frontmatter.image.childImageSharp.fluid.src} 
                text={value.content.frontmatter.title} 
                category={value.content.frontmatter.category}
                type="col"
              />
          </Col>
        )
      })
    }
}

export default props => (
  <StaticQuery
      query={graphql`
          query {
              items: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/"}}, sort: {fields: [frontmatter___id], order: ASC}, limit: 6) {
                edges {
                  content: node {
                    frontmatter {
                      id
                      title
                      category
                      image {
                        childImageSharp {
                          fluid(maxWidth: 1000) {
                            src
                          }
                        }
                      }
                    }
                  }
                }
              }
            }           
          `}
      render={({ items }) => <PortfolioOne items={items.edges} {...props} />}
  />
)