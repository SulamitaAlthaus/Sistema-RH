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

`;

export const Welcome = styled.div`
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 700;
    margin-left: 10%;
    margin-top: 3%;
    height: 10vh;
`;


export const Card = styled.div`
    margin: 5% auto 5% 6%;
    width: 90%;
    h1{
        font-size: 1.5rem;
        margin-left: 5%;
    }
    
`;

