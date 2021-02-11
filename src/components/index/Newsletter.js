import React from 'react'
import styled from 'styled-components'

const NewsletterContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F8D8CD;
    padding: 72px;
    gap: 40px;
    h1 {
        color: #005B4A;
        font-weight: 600;
    }
    form {
        display: flex;
        gap: 18px;
        width: 60%;
        input {
            flex-grow: 2;
            padding: 8px 60px;
            border: none;
            border-radius: 8px;
        }
        input::placeholder {
            color: #9c9c9c;
            text-align: center;
        }
        button {
            flex-grow: 1;
            border-radius: 8px;
            border: none;
            padding: 8px 20px;
            color: white;
            background-color: #F18565;
        }
    }
    @media (max-width: 768px) {
        padding: 64px;
        form {
            flex-direction: column;
            align-items: center;
        }
    }
`;

const Newsletter = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <NewsletterContainer>
            <h1>Receive updates from us!</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="email" placeholder="Email address" />
                <button type="submit">Subscribe</button>
            </form>
        </NewsletterContainer>
    )
}

export default Newsletter