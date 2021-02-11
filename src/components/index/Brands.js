import React from 'react'
import styled from 'styled-components'
import ncss from '../../images/brands/ncss.webp'
import carf from '../../images/brands/carf.png'
import spark from '../../images/brands/spark.webp'
import cta from '../../images/brands/CTA2019.webp'

const BrandsContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin: 100px 0;
    color: #9c9c9c;
    h5 {
        text-align: center;
    }
    img {
        margin-top: 14px;
        height: 120px;
    }
    .member,
    .accreditation {
        .img-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 48px;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Brands = () => {
    return (
        <BrandsContainer className="brands">
            <div className="member">
                <h5>Member of:</h5>
                <div className="img-container">
                    <img src={ncss} alt="NCSS"/>
                </div>
            </div>
            <div className="accreditation">
                <h5>Accreditation:</h5>
                <div className="img-container">
                    <img src={carf} alt="Carf"/>
                    <img src={spark} alt="Spark"/>
                    <img src={cta} alt="CTA"/>
                </div>
            </div>
        </BrandsContainer>
    )
}

export default Brands