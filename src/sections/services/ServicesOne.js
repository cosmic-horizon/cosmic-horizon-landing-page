import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'

class ServicesOne extends React.Component {


    shouldComponentUpdate() {
        return false
    }
      

    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-size: cover;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            background-color: rgba(0,0,0,.9);
            padding: 50px 0;
        `


        const ServiceElement = styled.div`
            margin-bottom: 20px;
            text-align: center;
            padding: 40px;
            border-radius: 20px;
            transition: .2s;
            &:hover {
                background-color: #000;
                box-shadow: 0 28px 60px rgb(241, 0, 255);
                transform: translateY(-10px);
            }
        `
         const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 500;
            font-family: Poppins;
            color: #fff;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #f100ff;
            margin-bottom: 10px;
            margin: auto;
         `
        const ServiceIcon = styled.div`
            margin-bottom: 20px;
            img {
                max-height: 70px;
            }
        `

        const ServiceList = styled.ul`
            padding: 0;
            margin: 11px 0 0 0;
        `

        const ServiceListElement = styled.li`
            list-style: none;
            color: #c5c5c5;
            font-weight: 300;
            font-size: 14px;
            margin: 5px 0px;
            &::before {
                display: inline-block;
                content: '';
                border-radius: 2.5px;
                height: 5px;
                width: 5px;
                margin-right: 10px;
                background-color:#f100ff;
                position: relative;
                bottom: 2.5px;
            }
        `

        return(
            <Section id="services">
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Cosmic Wormhole" />
                        <Row>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={200}>
                                        <ServiceElement>
                                            <ServiceIcon>
                                                    <img src={this.props.mobile.childImageSharp.fluid.src} alt="Phase 1" />
                                            </ServiceIcon>
                                            <ServiceHeading>
                                                Phase 1
                                            </ServiceHeading>
                                            <ServiceSeparator/>
                                            <ServiceList>
                                                <ServiceListElement>
                                                    Testnets
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Whitepaper
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Community Growth
                                                </ServiceListElement>
                                            </ServiceList>
                                        </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInDown"  delay={400}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.web.childImageSharp.fluid.src} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Phase 2
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                NFT Sale
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Partnerships
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Marketing
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.email.childImageSharp.fluid.src} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Phase 3
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Private Sale
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Team Expansion
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.seo.childImageSharp.fluid.src} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Phase 4
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Mainnet Launch
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                IBC
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                NFTs Distributed
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.network.childImageSharp.fluid.src} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Phase 5
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Foundation Launch
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Cosmic Horizon Live Test
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                    <AnimationContainer animation="fadeInRight" delay={1200}>
                                        <ServiceElement>
                                            <ServiceIcon>
                                                    <img src={this.props.ui.childImageSharp.fluid.src} alt="Mobile App Development" />
                                            </ServiceIcon>
                                            <ServiceHeading>
                                                Phase 6
                                            </ServiceHeading>
                                            <ServiceSeparator/>
                                            <ServiceList>
                                                <ServiceListElement>
                                                    Cosmic Horizon Alpha Launch
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Cosmic Airdrop
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Dex Listing
                                                </ServiceListElement>
                                            </ServiceList>
                                        </ServiceElement>
                                    </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        background: file(relativePath: {eq: "bg2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              src
            }
          }
        }
        web: file(relativePath: {eq: "icons/2.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobile: file(relativePath: {eq: "icons/1.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seo: file(relativePath: {eq: "icons/4.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        email: file(relativePath: {eq: "icons/3.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        ui: file(relativePath: {eq: "icons/6.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        network: file(relativePath: {eq: "icons/5.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }      
      `}
      render={({ 
        background,
        web,
        mobile,
        seo,
        email,
        ui,
        network}) => <ServicesOne  
        background={background}
        web={web}
        mobile={mobile}
        seo={seo}
        email={email}
        ui={ui}
        network={network}
        {...props} />}
    />
  )