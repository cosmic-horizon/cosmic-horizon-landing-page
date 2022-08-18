import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component{

    render() {
        const FooterMain = styled.div`
            background-color: #111;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        `

        const SocialIcons = styled.div`
            .social_icon {
                font-size: 15px;
                color: #555;
                margin: 0 5px;
                cursor: pointer;
                transition: .5s;
                &:hover {
                    color: #04e5e5;
                }
          `
        
          const Text = styled.p`
            font-size: 15px;
            font-weight: 300;
            color: #c5c5c5;
          `
        
        return (
            <FooterMain>
                <br/>
                <Text>
                © 2022 Qwoyn Studios S-LLC, All rights reserved.
                </Text>   
            </FooterMain>         
        )
    }
}
export default Footer
