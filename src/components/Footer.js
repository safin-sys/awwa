import React from 'react'
import logo from '../images/awwa-logo-mono.png'
import styled from 'styled-components'
import { Link } from 'gatsby';
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram  } from 'react-icons/ai'

const FooterContainer = styled.footer`
    background-color: #F18565;
    color: white;
    #row1 {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
            height: 60px;
        }
        ul {
            display: flex;
            gap: 32px;
            list-style: none;
            li {
                a {
                    color: white;
                    text-decoration: none;
                }
            }
        }
    }
    hr {
        border: none;
        border-top: 1px solid white;
    }
    #row2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        .socials {
            display: flex;
            a {
                height: 22px;
                width: 22px;
                align-self: center;
                margin-left: 20px;
                svg {
                    color: white;
                    height: 22px;
                    width: 22px;
                }
            }
            a:first-child {
                margin-left: 0;
            }
        }
        .copyright {
            p {
                font-size: 14px;
            }
        }
    }
    @media (max-width: 768px) {
        #row1 {
            flex-direction: column;
            align-items: flex-start;
            ul {
                margin-top: 14px;
                flex-direction: column;
                gap: 14px;
            }
        }
        #row2 {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
        }
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div id="row1" className="container">
                <img src={logo} alt="Logo"/>
                <ul>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Stories</Link></li>
                    <li><Link to="#">Events</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </div>
            <hr/>
            <div id="row2" className="container">
                <div className="socials">
                    <Link to="#"><AiOutlineTwitter /></Link>
                    <Link to="#"><AiFillFacebook /></Link>
                    <Link to="#"><AiOutlineInstagram /></Link>
                </div>
                <div className="copyright">
                    <p>© {new Date().getFullYear()} - AWWA | All right reserved</p>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer