import React from 'react'
import styled from 'styled-components'
import kids from '../../images/kids.jpg'
import bike from '../../images/bike.jpg'
import teens from '../../images/teens.jpg'

const HelpContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: 80px auto;
    h1 {
        color: #005B4A;
        font-size: 48px;
    }
`;

const HowWeHelp = () => {
    const cards = [
        {
            title: 'Early Years',
            img: kids,
            details: [
                'Early Intervention Centre',
                'Development Support and Learning Support',
                'Kindle Garden Preschool'
            ]
        },
        {
            title: 'School Going',
            img: teens,
            details: [
                'AWWA School',
                'Community Integration Service',
                'Special Student Care Centre'
            ]
        },
        {
            title: 'Adults',
            img: bike,
            details: [
                'Adult Disability Home and Day Activity Centre (Operational in 2020)',
                'Home Personal Care Service'
            ]
        }
    ]
    return (
        <HelpContainer>
            <h1>How We Help</h1>
            <CardContainer>
                {cards.map((card, i) => {
                    return <Card key={i} card={card} />
                })}
            </CardContainer>
        </HelpContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    .card {
        width: 350px;
        .img-container {
            width: 350px;
            height: 350px;
            overflow: hidden;
            display: grid;
            place-content: center;
            img {
                height: 350px;
            }
        }
        .details-container {
            height: 200px;
            background-color: #F18565;
            padding: 24px;
            text-align: center;
            color: white;
            display: grid;
            place-content: center;
            h1 {
                color: white;
                font-size: 24px;
                margin-bottom: 24px;
                text-transform: uppercase;
            }
            p {
                width: 250px;
                line-height: 24px;
            }
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Card = ({ card }) => {
    return (
        <div className="card">
            <div className="img-container">
                <img src={card.img} alt={card.title} />
            </div>
            <div className="details-container">
                <h1>{card.title}</h1>
                {card.details.map((detail, i) => {
                    return <p key={i}>{detail}</p>
                })}
            </div>
        </div>
    )
}

export default HowWeHelp;