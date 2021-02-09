import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import kayak from '../images/kayak.jpeg'

const AboutContainer = styled.section`
    display: flex;
    width: fit-content;
    margin: auto;
    .img-container {
        height: 500px;
        overflow: hidden;
        transform: rotate(-3deg);
        display: grid;
        place-content: center;
        img {
            width: 400px;
        }
    }
    article {
        color: #005B4A;
        margin: 8px 0 24px 72px;
        h1 {
            font-size: 48px;
        }
        p {
            margin: 24px 0 64px 0;
            font-weight: 600;
            max-width: 69ch;
        }
        a {
            text-decoration: none;
            text-transform: uppercase;
            padding: 8px 20px;
            background-color: #F8D8CD;
            color: #F18565;
            border-radius: 8px;
            font-size: 12px;
            font-weight: bold;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        left: 0;
        width: 100%;
        margin: 15vh 0;
        .img-container {
            display: none;
        }
        article {
            margin: 24px 48px;
        }
    }
`;

const About = () => {
    return (
        <AboutContainer>
            <div className="img-container">
                <img src={kayak} alt="Kayak"/>
            </div>
            <article>
                <h1>About Us</h1>
                <p>AWWA is a social service agency, which serves persons of different demographics across life-stages yearly. Services include early intervention for pre-schoolers, education and disability support for children and adults with additional needs, assistance to low income families, caregivers, and health and social assistance for vulnerable seniors. AWWA is Singapore-based, with an Institution of a Public Character (IPC) status.</p>
                <Link to="#" role="button">How we help</Link>
            </article>
        </AboutContainer>
    )
}

export default About;