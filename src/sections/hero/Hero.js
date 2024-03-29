import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

class Hero extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }

    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({height: window.innerHeight})
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({width: window.innerWidth})
        }
    }

    
    componentDidMount() {
        this.setState({height: window.innerHeight, width: window.innerWidth})
        window.addEventListener('resize', this.updateDimensions)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const Section = styled.section`
            position: relative;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-size: cover;
            background-repeat: no-repeat;
        `

        const Overlay = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            background-color: rgba(0,0,0,.5);
        `

        const Heading1 = styled.h1`
            font-size: 80px;
            font-family: Teko;
            line-height: 40px;
            color: #fff;
            font-weight: 400;
            text-transform: uppercase;
            @media (min-width:768px) {
                margin-left: 4px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 40px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
        `

        const Heading2 = styled.h2`
            font-size: 120px;
            color: #fff;
            font-weight: 700;
            text-transform: uppercase;
            background: -webkit-linear-gradient(left, #741d8c , #f100ff);
            background: -o-linear-gradient(right, #741d8c, #f100ff);
            background: -moz-linear-gradient(right, #741d8c, #f100ff);
            background: linear-gradient(to right, #741d8c, #f100ff); 
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
            @media (max-width:767px) {
                font-size: 40px;
                line-height: 40px;
            }
           @media (min-width:768px) and (max-width:1500px) {
                font-size: 70px;
            }
        `

        const Type = styled.div`
            font-size: 50px;
            line-height: 50px;
            color: #fff;
            text-transform: uppercase;
            @media (min-width:768px) {
                margin-left: 6px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 23px;
                line-height: 20px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
            span {
                font-family: Teko;
            }
        `
        const Content = styled.div`
            position: relative;
            z-index: 10
        `

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #f100ff;
            margin-bottom: 30px;
            @media (min-width:768px) {
                margin-left: 6px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
        `

        const BottomContent = styled.div`
            position: absolute;
            width: 100%;
            bottom: -14%;
            z-index: 2;
            @media (min-width:1025px) and (max-width: 1400px) {    
                bottom: -35%;
            }
            @media (max-width:767px) {
                position: relative;
                bottom: 0;
            } 
            @media (min-width:768px) and (max-width: 1023px) {    
                bottom: -25%;
            }
        `

        const ServiceCol = styled(Col)`
            padding: 0;
            border-right: #444;
            &.no-border {
                border-right: none;
            }
            @media (max-width:500px) {
                border-right:none;
            }
        `

        const Service = styled.div`
            min-height: 300px;
            background-color: #111;
            transition: .2s;
            display: flex;
            justify-content: center;
            flex-direction: column;
            &:hover {
                background-color: #222;
            }
        `
        const ServiceContent = styled.div`
            padding: 40px;
            color: #fff;
        `
        const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 400;
            font-family: Teko;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #f100ff;
            margin-bottom: 10px;
        `

        const ServiceIcon = styled.div`
            margin-bottom: 20px;
            img {
                max-height: 70px;
            }
        `

        const ServiceText = styled.p`
            font-size: 14px;
            font-weight: 300;
            color: #c5c5c5;
        `
        
        return (
                <Section id="home">
                    <Overlay style={{height: `${this.state.width > 500 ? this.state.height : 350}px`}}>
                        <Container>
                            <Content>
                                <Heading1>
                                    Cosmic
                                </Heading1>
                                <Heading2>
                                    Horizon
                                </Heading2>
                                <Separator/>
                                <Type>
                                    <Typewriter
                                        options={{
                                        strings: [
                                            'Cosmos SDK Powered',
                                            'Elite Space Trading Game',
                                            'Brought To You By',
                                            'Qwoyn Studios'
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        }}
                                    />
                                </Type>
                                <br/><br/><br/><br/><br/>
                            </Content>
                        </Container>
                    </Overlay>
                    <BottomContent>
                            <Container>
                                <Row>
                                    <ServiceCol md={4} style={{borderRight: this.state.width > 500 ? "1px solid #444" : "none"}}>
                                        <Service>
                                            <ServiceContent>
                                                <ServiceIcon>
                                                    <img src={this.props.webexpertIcon.childImageSharp.fluid.src} alt="web experts" />
                                                </ServiceIcon>
                                                <ServiceHeading>Cosmos SDK</ServiceHeading>
                                                <ServiceSeparator/>
                                                <ServiceText>
                                                    Our application-specific blockchain is built using the Cosmos SDK, an open-source 
                                                    framework for building multi-asset public Proof-of-Stake (PoS) blockchains and one of 
                                                    the most powerfull tools in the industry.
                                                </ServiceText>
                                            </ServiceContent>
                                        </Service>
                                    </ServiceCol>
                                    <ServiceCol md={4} style={{borderRight: this.state.width > 500 ? "1px solid #444" : "none"}}>
                                        <Service>
                                            <ServiceContent>
                                                <ServiceIcon>
                                                        <img src={this.props.mobileIcon.childImageSharp.fluid.src} alt="mobile experts" />
                                                </ServiceIcon>
                                                <ServiceHeading>Community Owned</ServiceHeading>
                                                <ServiceSeparator/>
                                                <ServiceText>
                                                    Cosmic Horizon is not just an experience, it's a community! Using the power of governance 
                                                    you get to decide how to make it an amazing one. You are at the center of this mission!
                                                </ServiceText>
                                            </ServiceContent>
                                        </Service>
                                    </ServiceCol>
                                    <ServiceCol md={4}>
                                        <Service>
                                            <ServiceContent>
                                                <ServiceIcon>
                                                        <img src={this.props.seoIcon.childImageSharp.fluid.src} alt="seo experts" />
                                                </ServiceIcon>
                                                <ServiceHeading>DAO</ServiceHeading>
                                                <ServiceSeparator/>
                                                <ServiceText>
                                                    One of the most exciting opportunities a blockchain community presents is the formation of a Decentralized
                                                    autonomous orginization (DAO).  Cosmic Horizon enables making a real change in the world!
                                                </ServiceText>
                                            </ServiceContent>
                                        </Service>
                                    </ServiceCol>
                                </Row>
                            </Container>
                    </BottomContent>
                </Section>
        )
    }
}
export default props => (
    <StaticQuery
      query={graphql`
      query {
        background: file(relativePath: {eq: "background-poly.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              src
            }
          }
        }
        webexpertIcon: file(relativePath: {eq: "icons/cosmos-logo-vertical-dark.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobileIcon: file(relativePath: {eq: "icons/community.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seoIcon: file(relativePath: {eq: "icons/DAO.png"}) {
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
        webexpertIcon, 
        mobileIcon, 
        seoIcon}) => <Hero  
        background={background} 
        webexpertIcon={webexpertIcon} 
        mobileIcon={mobileIcon} 
        seoIcon={seoIcon}
        {...props} />}
    />
  )
