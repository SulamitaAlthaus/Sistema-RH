import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 10px;
    height: 90vh;
    width: 95%;
    border: 5px solid #8A2BE2;
    border-radius: 20px;
    font-family: 'Segoe UI', sans-serif;

    hr{
        background-color: #8A2BE2; 
        width: 90%;
        margin: 0 auto;
    }
    @media only screen and (max-width: 600px) {
        width: 80%;
        height: 100%;
        padding: 2%;
        margin: 0 auto;
    }

`;

export const Welcome = styled.div`
    font-size: 2rem;
    font-weight: 700;
    margin-left: 10%;
    margin-top: 3%;
    height: 10vh;
    
    @media only screen and (max-width: 600px) {
        font-size: 160%;
        margin: 8vh auto auto auto;
    }
`;


export const Card = styled.div`
    margin: 5% auto 5% 6%;
    width: 90%;
    h1{
        font-size: 1.8rem;
        margin-left: 5%;
    }
    
    @media only screen and (max-width: 600px) {
        margin: auto;
        width: 100%;
        h1{
            width: 100%;
            margin: auto;
            text-align: center;
            font-size: 1.3rem;
        }
    }
`;

