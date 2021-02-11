import React from 'react'
import styled from 'styled-components'
import indian from '../../images/indian.jpg'
import seniors from '../../images/seniors.jpg'
import kids from '../../images/kids.jpg'

const FreshContainer = styled.section`
    margin: 100px auto;
    h1 {
        color: #005B4A;
        font-size: 48px;
        margin-bottom: 48px;
    }
    .content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 48px;
        height: 500px;
        .img-container {
            display: grid;
            place-items: center;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            .grad {
                z-index: 1;
                height: 140px;
                width: 100%;
                bottom: 0;
                background: rgb(241,133,101);
                background: linear-gradient(0deg, rgba(241,133,101,.7) 0%, rgba(255,47,47,0) 50%);
                position: absolute;
            }
            img {
                min-height: 100%;
                min-width: 100%;
            }
            h5 {
                position: absolute;
                bottom: 16px;
                color: white;
                z-index: 20;
                font-weight: 600;
                font-size: 16px;
                text-transform: uppercase;
            }
        }
        .img-container:nth-child(1) {
            grid-column: 1;
            grid-row: 1/3;
            gap: 0;
        }
        .img-container:nth-child(2) {
            grid-column: 2;
            grid-row: 1;
        }
        .img-container:nth-child(3) {
            grid-column: 2;
            grid-row: 2;
        }
    }
    @media (max-width: 768px) {
        .content {
            height: auto;
            grid-template-columns: 1fr;
            .img-container {
                height: 300px;
                img {
                    height: 300px;
                }
            }
            .img-container:nth-child(1) {
                grid-column: 1;
                grid-row: 1;
                gap: 0;
            }
            .img-container:nth-child(2) {
                grid-column: 1;
                grid-row: 2;
            }
            .img-container:nth-child(3) {
                grid-column: 1;
                grid-row: 3;
            }
        }
    }
`;

const FreshContent = () => {
    return (
        <FreshContainer className="container">
            <h1>Fresh Content</h1>
            <div className="content">
                <div className="img-container">
                    <img src={indian} alt="Happy Man"/>
                    <h5>Learn how to motivate yourself</h5>
                    <div className="grad"></div>
                </div>
                <div className="img-container">
                    <img src={seniors} alt="Seniors Chillin"/>
                    <h5>A world of infinite opportunities</h5>
                    <div className="grad"></div>
                </div>
                <div className="img-container">
                    <img src={kids} alt="Kids smiling"/>
                    <h5>Little things do make a difference</h5>
                    <div className="grad"></div>
                </div>
            </div>
        </FreshContainer>
    )
}

export default FreshContent