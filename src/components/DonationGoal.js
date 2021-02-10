import React from 'react'
import styled from 'styled-components'

const GoalContainer = styled.div`
    display: grid;
    place-items: center;
    text-align: center;
    h1 {
        color: #005B4A;
    }
    #goal-description {
        margin-top: 24px;
        max-width: 500px;
        line-height: 20px;
        span {
            text-decoration: underline;
            text-decoration-color: #F18565;
        }
    }
    .progress {
        h1 {
            color: #F18565;
            font-size: 200px;
            font-weight: 800;
            line-height: 220px;
        }
        .bar-bg {
            margin: 24px auto 0 auto;
            height: 30px;
            width: 60vw;
            background-color: white;
            border-radius: 8px;
            .bar {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                background-color: #F18565;
                border-radius: 8px;
                color: white;
            }
        }
        .details {
            display: flex;
            justify-content: space-between;
            gap: 0 48px;
            width: 60vw;
            p {
                margin: 24px 0 48px 0;
                span {
                    color: #F18565;
                    white-space: nowrap;
                }
            }
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
        text-decoration: none;
    }
    @media (max-width: 768px) {
        .progress {
            .bar-bg,
            .details {
                width: 80vw;
            }
        }
    }
`;

const DonationGoal = () => {
    const progressJSON = {
        goal: 300,
        barFilled: 30,
        details: {
            howManyImpacted: 90,
            whoImpacted: 'Children',

            remaining: 10,
            remainingUnit: 'days',

            donors: 420
        }
    }
    return (
        <GoalContainer>
            <h1>We want to empower our students</h1>
            <p id="goal-description">We hope that you can be part of the #BuildASchool campaign to raise <span>$70,000 for 300 students with autism.</span> Your donation will change the lives of many students just like Darius and give them the simple opportunity of going to school.</p>
            <div className="progress">
                <h1 className="goal">{progressJSON.goal}</h1>
                <div className="bar-bg">
                    <div className="bar" style={{width: `${progressJSON.barFilled}%`}}>{progressJSON.barFilled + '%'}</div>
                </div>
                <div className="details">
                    <p>We have impacted: <span>{progressJSON.details.howManyImpacted + ' ' + progressJSON.details.whoImpacted}</span></p>
                    <p>Remaining: <span>{progressJSON.details.remaining + ' ' + progressJSON.details.remainingUnit}</span></p>
                    <p>Donors: <span>{progressJSON.details.donors}</span></p>
                </div>
            </div>
            <button className="cta-btn">Make a difference</button>
        </GoalContainer>
    )
}

export default DonationGoal