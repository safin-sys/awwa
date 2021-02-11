import React from 'react'
import styled from 'styled-components'
import bike from '../../images/bike.jpg'
import { GiCottonFlower, GiDandelionFlower, GiFireFlower, GiFlowerEmblem } from 'react-icons/gi'

const DonationContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    border-radius: 8px;
    overflow: hidden;
    margin: auto;
    max-width: 1000px;
    box-shadow: 10px 10px 40px -10px rgba(0,0,0,0.5);
    aside {
        display: grid;
        place-content: center;
        overflow: hidden;
    }
    article {
        background-color: white;
        padding: 14px 48px;
        .frequency {
            button {
                width: 50%;
                padding: 24px;
                font-weight: 600;
                font-size: 18px;
                border: none;
                background: none;
                color: #9c9c9c;
            }
            button:first-child {
                color: #F18565;
                border-bottom: 4px solid;
            }
            margin-bottom: 24px;
        }
    }
    @media (max-width: 768px) {
        display: block;
        aside {
            display: none;
        }
    }
`;

const DonationBox = () => {
    return (
        <DonationContainer>
            <aside className="img-container">
                <img src={bike} alt="Man learning to ride bike"/>
            </aside>
            <article>
                <div className="frequency">
                    <button>One-time</button>
                    <button>Monthly</button>
                </div>
                <div className="text">
                    <h1>Build A School</h1>
                    <p>Thank you for empowering lives! Your contributions will help to provide learning opportunities for children with autism at the second AWWA School.</p>
                </div>
                <div className="amount">
                    <div className="50">
                        <GiCottonFlower />
                        <div className="details">
                            <p>One Student Goes To School</p>
                            <h1>$50</h1>
                        </div>
                    </div>
                    
                    <div className="100">
                        <GiDandelionFlower />
                        <div className="details">
                            <p>Two Student Goes To School</p>
                            <h1>$100</h1>
                        </div>
                    </div>

                    <div className="150">
                        <GiFireFlower />
                        <div className="details">
                            <p>Three Student Goes To School</p>
                            <h1>$150</h1>
                        </div>
                    </div>

                    <div className="more">
                        <GiFlowerEmblem />
                        <div className="details">
                            <p>Empower More Children</p>
                            <input type="number"/>
                        </div>
                    </div>
                </div>
            </article>
        </DonationContainer>
    )
}

export default DonationBox