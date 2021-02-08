import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import heroimg from '../images/hero/hero.png'
import kids from '../images/hero/kids.jpg'
import seniors from '../images/hero/seniors.jpg'
import teens from '../images/hero/teens.jpg'

const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    .cta {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        margin: 120px auto;
        z-index: 1;
        h1 {
            text-align: center;
            font-size: 42px;
            color: #005B4A;
            span {
                text-decoration: underline;
                text-decoration-color: #F18565;
            }
        }
        .cta-btn {
            padding: 8px 20px;
            background-color: #F18565;
            border: none;
            color: white;
            text-transform: uppercase;
            border-radius: 6px;
            cursor: pointer;
        }
    }
    .image {
        position: absolute;
        width: 85%;
        max-width: 1344px;
        img {
            width: 100%;
        }
    }
    .mobile-images {
        display: none;
        position: absolute;
        width: 100%;
        height: calc(90vh - 100px);
        left: 0;
        transition: all 2s ease;
        overflow: hidden;
        img {
            animation: 20s fade infinite;
            position: absolute;
            width: 100%;
            height: 100%;
        }
        img:nth-child(2) {
            animation-delay: -7s;
        }
        img:nth-child(3) {
            animation-delay: -14s;
        }
        @keyframes fade {
            0% {
                opacity: 0;
                transform: scale(1);
            }
            20% {opacity: 1;}
            33% {opacity: 1;}
            53% {opacity: 0;}
            100% {
                opacity: 0;
                transform: scale(1.2);
            }
        }
    }
    @media (max-width: 768px) {
        .cta {
            margin: 70px auto;
        }
        .image {
            display: none;
        }
        .mobile-images {
            display: block;
        }
    }
`;

const Spacer = styled.div`
    height: 440px;
    @media (max-width: 768px) {
        height: 50px;
    }
    @media (min-width: 1920px) {
        height: 600px;
    }
`;

const Hero = () => {
    const mobileImages = useRef();
    
    useEffect(() => {
        setTimeout(() => {
            mobileImages.current.style.opacity = '0';
        }, 20000)
    }, [])

    return (
        <>
            <HeroContainer>
                <section className="cta">
                    <h1>Uplift and empower <br/> the <span>community</span> <br/> one person at a time.</h1>
                    <button className="cta-btn">Make a difference</button>
                </section>
                <section className="image">
                    <img src={heroimg} alt="Hero"/>
                </section>
                <section className="mobile-images" ref={mobileImages}>
                    <img src={kids} alt="Kids"/>
                    <img src={teens} alt="Teens playing"/>
                    <img src={seniors} alt="Seniors chilling"/>
                </section>
            </HeroContainer>
            <Spacer className="spacer"></Spacer>
        </>
    )
}

export default Hero;