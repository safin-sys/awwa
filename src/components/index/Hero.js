import React from 'react'
import styled from 'styled-components'
import heroimg from '../../images/hero.png'

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
    @media (max-width: 768px) {
        .cta {
            margin: 70px auto;
        }
        .image {
            display: none;
        }
    }
`;

const Spacer = styled.div`
    height: 440px;
    @media (max-width: 768px) {
        height: 0;
    }
    @media (min-width: 1920px) {
        height: 600px;
    }
`;

const Hero = () => {
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
            </HeroContainer>
            <Spacer className="spacer"></Spacer>
        </>
    )
}

export default Hero;