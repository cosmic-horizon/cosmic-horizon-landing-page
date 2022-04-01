import React from 'react'
import Layout from 'components/layout'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Hero from 'sections/hero/Hero.js'
import AboutOne from 'sections/about/AboutOne.js'
import ServicesOne from 'sections/services/ServicesOne.js'
import PortfolioOne from 'sections/portfolio/PortfolioOne.js'
import AboutPersonal from '../sections/about/AboutPersonal'
import ClientsOne from 'sections/clients/ClientsOne.js'
import ContactCreative from 'sections/contact/ContactCreative.js'

class Index extends React.Component {

  render() {

    const { site } = this.props.data

    return (
      <div>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
          <meta name="image" content={site.meta.image} />
        </Helmet>
        <Layout
          isHome={true}
          sections={['home']}
        >
          <Hero />
          <AboutOne />
          <AboutPersonal/>
          <PortfolioOne />
          <ClientsOne />
          <ContactCreative />
        </Layout>
      </div>
    )
  }
}

export default Index

export const creativeOneQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
        image
      }
    }
  }
`