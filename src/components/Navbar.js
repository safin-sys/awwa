import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import logo from '../images/awwa-logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useRef } from 'react';

const NavContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
        height: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
            img {
                height: 60px;
            }
        }
        .nav-links {
            list-style: none;
            display: flex;
            li {
                margin-left: 32px;
                a {
                    text-transform: uppercase;
                    text-decoration: none;
                    font-weight: bold;
                    color: #005B4A;
                    font-size: 14px;
                }
            }
            li:first-child {
                margin-left: 0;
            }
            .nav-btn {
                a {
                    padding: 8px;
                    background-color: #F8D8CD;
                    color: #F18565;
                    border-radius: 8px;
                }
            }
        }
    }
    .menu-btn,
    .close-btn {
        display: none;
        border: none;
        background: none;
        cursor: pointer;
        svg {
            width: 30px;
            height: 30px;
            color: #F18565;
        }
    }
    .mobile-nav { 
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        background-color: white;
        width: 70%;
        box-shadow: -10px 0px 30px -25px rgba(0,0,0,0.5);
        transform: translateX(110%);
        transition: all .2s ease-in-out;
        .nav-links {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            list-style: none;
            height: 90%;
            li {
                a {
                    text-transform: uppercase;
                    text-decoration: none;
                    font-weight: bold;
                    color: #005B4A;
                    font-size: 14px;
                }
            }
            .nav-btn {
                a {
                    padding: 8px;
                    background-color: #F8D8CD;
                    color: #F18565;
                    border-radius: 8px;
                }
            }
        }
        .close-btn {
            display: block;
            position: absolute;
            right: 11%;
            top: 16px;
            z-index: 1;
        }
    }
    .active {
        transform: translateX(0);
    }
    @media (max-width: 768px) {
        nav {
            .nav-links {
                display: none;
            }
        }
        .menu-btn {
            display: block;
        }
        .mobile-nav {
        }
    }
`;

const Navbar = () => {
    const navLinks = useRef();

    const handleSidenav = () => {
        navLinks.current.classList.toggle('active');
    }

    return (
        <NavContainer>
            <nav>
                <Link className="logo" to="/"><img src={logo} alt="AWWA logo"/></Link>
                <ul className="nav-links">
                    <li><Link to="#">About us</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Stories</Link></li>

                    <li><Link to="#">Events</Link></li>
                    <li><Link to="#">Contact</Link></li>
                    <li className="nav-btn"><Link to="#">Donate</Link></li>
                </ul>
            </nav>
            
            <button onClick={handleSidenav} className="menu-btn"> <AiOutlineMenu /> </button>
            
            <aside className="mobile-nav" ref={navLinks}>
                <button onClick={handleSidenav} className="close-btn"> <AiOutlineClose /> </button>
                <ul className="nav-links">
                    <li><Link to="#">About us</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Stories</Link></li>

                    <li><Link to="#">Events</Link></li>
                    <li><Link to="#">Contact</Link></li>
                    <li className="nav-btn"><Link to="#">Donate</Link></li>
                </ul>
            </aside>
        </NavContainer>
    )
}

export default Navbar;