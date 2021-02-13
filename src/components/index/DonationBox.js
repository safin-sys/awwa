import React, { useRef } from 'react'
import styled from 'styled-components'
import bike from '../../images/bike.jpg'
import { GiCottonFlower, GiDandelionFlower, GiFireFlower, GiFlowerEmblem } from 'react-icons/gi'

const DonationContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    border-radius: 8px;
    overflow: hidden;
    margin: 150px auto;
    max-width: 1000px;
    box-shadow: 10px 10px 40px -10px rgba(0,0,0,0.5);
    aside {
        display: grid;
        place-content: center;
        overflow: hidden;
    }
    article {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 8px 48px 18px 48px;
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
            button.freq-active {
                color: #F18565;
                border-bottom: 4px solid;
            }
            button:focus {
                outline: none;
            }
            margin-bottom: 24px;
        }
        .text {
            h1 {
                color: #005B4A;
                font-size: 24px;
            }
            p {
                margin: 14px 0;
                color: #525252;
                line-height: 20px;
            }
        }
        .amount {
            align-self: center; 
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px 14px;
            margin-bottom: 32px;
            cursor: pointer;
            .card {
                display: flex;
                align-items: center;
                gap: 14px;
                border: 2px solid #9c9c9c;
                border-radius: 8px;
                padding: 10px 14px;
                svg {
                    fill: #005B4A;
                    width: 50px;
                    height: 50px;
                }
                .details {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    p {
                        font-weight: 600;
                        color: #525252;
                        text-align: center;
                        line-height: 18px;
                    }
                    h1 {
                        color: #005B4A;
                        font-size: 48px;
                    }
                }
            }
            .card-active {
                border: 2px solid #F18565;
            }
            .card:last-child {
                input {
                    border: none;
                    border-bottom: 1px solid #005B4A;
                    font-size: 48px;
                    font-weight: bold;
                    color: #005B4A;
                    width: 100px;
                    text-align: center;
                }
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    -moz-appearance: textfield;
                    margin: 0;
                }
            }
            .card:focus {
                outline: none;
            }
        }
        .cta-btn {
            width: 100%;
            padding: 8px 20px;
            background-color: #F18565;
            border: none;
            color: white;
            text-transform: uppercase;
            border-radius: 6px;
            cursor: pointer;
        }
    }
    @media (max-width: 768px) {
        display: block;
        aside {
            display: none;
        }
        article {
            padding: 0 14px 14px 14px;
            .amount {
                gap: 8px;
                cursor: default;
                .card {
                    svg {
                        display: none;
                    }
                }
            }
        }
    }
`;

const DonationBox = () => {
    const oneTime = useRef();
    const monthly = useRef();

    const handleFreq = e => {
        e.preventDefault();
        oneTime.current.classList.toggle('freq-active')
        monthly.current.classList.toggle('freq-active')
    }

    const handleDonation = e => {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.classList.remove('card-active');
        });

        e.currentTarget.classList.add('card-active');
    }

    return (
        <DonationContainer>
            <aside className="img-container">
                <img src={bike} alt="Man learning to ride bike"/>
            </aside>
            <article>
                <div className="frequency">
                    <button ref={oneTime} onClick={e=>handleFreq(e)} className="freq-active">One-time</button>
                    <button ref={monthly} onClick={e=>handleFreq(e)}>Monthly</button>
                </div>
                <div className="text">
                    <h1>Build A School</h1>
                    <p>Thank you for empowering lives! Your contributions will help to provide learning opportunities for children with autism at the second AWWA School.</p>
                </div>
                <div className="amount">
                    <div role="button" tabIndex={0} onClick={e=>handleDonation(e)} onKeyDown={e=>handleDonation(e)} className="card 50 card-active">
                        <GiCottonFlower />
                        <div className="details">
                            <p>One Student Goes To School</p>
                            <h1>$50</h1>
                        </div>
                    </div>
                    
                    <div role="button" tabIndex={0} onClick={e=>handleDonation(e)} onKeyDown={e=>handleDonation(e)} className="card 100">
                        <GiDandelionFlower />
                        <div className="details">
                            <p>Two Student Goes To School</p>
                            <h1>$100</h1>
                        </div>
                    </div>

                    <div role="button" tabIndex={0} onClick={e=>handleDonation(e)} onKeyDown={e=>handleDonation(e)} className="card 150">
                        <GiFireFlower />
                        <div className="details">
                            <p>Three Student Goes To School</p>
                            <h1>$150</h1>
                        </div>
                    </div>

                    <div role="button" tabIndex={0} onClick={e=>handleDonation(e)} onKeyDown={e=>handleDonation(e)} className="card more">
                        <GiFlowerEmblem />
                        <div className="details">
                            <p>Empower More Children</p>
                            <input type="number"/>
                        </div>
                    </div>
                </div>
                <button className="cta-btn">Make A Difference</button>
            </article>
        </DonationContainer>
    )
}

export default DonationBox