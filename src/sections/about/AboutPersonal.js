import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import RevealContent from 'components/reveal-content'
import { StaticQuery, graphql } from 'gatsby'
import Counter from 'components/counter'
import AnimationContainer from 'components/animation-container'
import TabsPart from 'sections/about/parts/TabsPart'

class AboutPersonal extends React.Component {


    shouldComponentUpdate() {
        return false
    }
      
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #050505;
            padding-top: 50px;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            @media (max-width: 767px) {
                padding: 80px 20px;
            }
            @media (max-width: 500px) {
                padding: 0 20px;
            }
        `

        const IconContainer = styled.div`
            width: 150px;
            height: 150px;
            margin: auto;
            padding: 35px;
            text-align: center;
            position: relative;
            bottom: 75px;
            background-color: #000000;
            border-radius: 150px;
            transition: .5s;
        `

        const CounterRow = styled(Row)`
            margin-top: 100px;
            background-color: #000;
            padding: 100px 0;
            @media (max-width: 500px) {
                margin-top: 0;
            }

        `
        
        const AboutContainer = styled(Container)`
            padding: 100px 0;
            @media (max-width: 500px) {
                padding: 50px 0;
            }
        `

        const CounterComponent = styled.div`
            margin: 10px 0;
            text-align: center;
            @media (max-width:767px) {
                margin: 50px 0;
                text-align:center;
            }
            .value {
                font-size: 120px;
                font-family: Teko;
                color: #fff;
                line-height: 90px;
            }
            .text {
                font-size: 20px;
                color: #fff;
            }
            .symbol {
                color: #04e5e5;
                position: absolute;
                font-size: 39px;
                top: -28px;
                @media (max-width: 500px) {
                    top: 0;
                }
            }

        `

        const LeftCol = styled(Col)`
            display: flex;
            align-items: baseline;
            justify-content: center;
            @media (max-width: 500px) {
                margin-bottom: 50px;
            }
        `


        const AnimatedShadow = keyframes`
            0%   {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            10%  {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
            20%  {box-shadow: 0 28px 60px rgba(239, 78, 123, .5);}
            30%  {box-shadow: 0 28px 60px rgba(161, 102, 171, .5);}
            40% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            50% {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            60% {box-shadow: 0 28px 60px rgba(7, 179, 155, .5);}
            70% {box-shadow: 0 28px 60px rgba(111, 186, 130, .5);}
            80% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            90% {box-shadow: 0 28px 60px rgba(16, 152, 173, .5);}
            100% {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
        `
        const ImageContainer = styled.div`
            border-radius: 20px;
            overflow: hidden;
            animation: ${AnimatedShadow} 10s infinite alternate;
            @media (max-width: 767px) {
                margin-bottom: 50px;
            }
        `

        const Image = styled.img`
            max-width: 400px;
            @media (max-width: 767px) {
                max-width: 200px;
            }
            @media (max-width: 1400px) {
                max-width: 280px;
            }
        `

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #f100ff;
            margin-bottom: 20px;
        `

        const Heading = styled.h2`
            font-size: 70px;
            font-family: Teko;
            color: #fff;
            line-height: 50px;
        `

        const Text = styled.p`
            font-size: 12px;
            font-weight: 300;
            color: #c5c5c5;
        `

        const InfoPart = styled.div`
            min-height: 250px;
            background-color: #111;
            border: 2px solid #444;
            &:hover ${IconContainer} {
              background-color: #f100ff;
            }
        `

        const InfoTitle = styled.h4`
            font-size: 35px;
            color: #fff;
            font-family: Teko;
            text-align: center;
        `

        const Info = styled.div`
            position: relative;
            bottom: 30px;
        `

        const InfoLinkContainer = styled.div`
            text-align: center;
        `

        const InfoLink = styled.a`
            color: #f100ff;
            transition: .5s;
            &:hover {
              color: #fff;
              text-decoration: none;
            }
        `

        const IconRow = styled(Row)`
            margin-top: 150px;
        `

        const IconCol = styled(Col)`
            @media (max-width: 500px) {
              margin-bottom: 140px;
            }
        `

        return(
            <Section id="about">
                <AboutContainer>
                    <Row>
                        <LeftCol md={6}>
                            <AnimationContainer animation="fadeIn">
                                <ImageContainer>
                                    <RevealContent delay={500}>
                                        <Image src={this.props.image.childImageSharp.fluid.src} alt="about" />
                                    </RevealContent>
                                </ImageContainer>
                            </AnimationContainer>
                        </LeftCol>
                        <Col md={6}>
                            <AnimationContainer animation="fadeIn">
                                <Heading>Private Token Sale</Heading>
                                <Separator />
                                <Text>
                                    Qwoyn Studios is inviting the community to bootstrap the Cosmic Horizon Network via a KYC'd private 
                                    token sale. This is your chance to play and important role in the community and build a decentralized gaming experience. 
                                    We have two investment options, both of which come at a discounted token price and varying lockup terms!
                                    1 year lockups - $0.46 | 3 year lockups - $0.63 (3 year lockups = 1 year cliff and 2 year linear lockup)
                                </Text>
                                <br/>
                                <Text>
                                    Click the KYC link below to begin!
                                </Text>
                                <TabsPart />
                            </AnimationContainer>
                        </Col>
                    </Row>
                </AboutContainer>
                <CounterRow>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={10000000} duration={5} delay={1000} text="10 million tokens up for Available" animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={2} duration={5} delay={1000} text="Investment Options" animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={4} duration={5} delay={1000} text="Weeks Remaining" animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={1000} duration={5} delay={1000} text="Minimum Dollar Investment" animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </CounterRow>
                <CounterRow>
                <Container>
                  <IconRow>
                      <IconCol md={12}>
                        <AnimationContainer animation="fadeIn" delay={500}>
                          <InfoPart>
                            <Info>
                              <InfoTitle>
                                KYC
                              </InfoTitle>
                              <InfoLinkContainer>
                                <InfoLink target="_blank" href="https://cosmic-horizon.synaps.me">
                                  Cosmic Horizon KYC Portal
                                </InfoLink>
                              </InfoLinkContainer>
                            </Info>
                          </InfoPart>
                        </AnimationContainer>
                      </IconCol>
                  </IconRow>
                </Container>
                </CounterRow>
            </Section>
        )
    }
}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        image: file(relativePath: {eq: "about-me.jpg"}) {
          childImageSharp {
            fluid(maxHeight: 2000) {
              src
            }
          }
        }
      }
      `}
      render={({ image }) => <AboutPersonal  image={image} {...props} />}
    />
  )