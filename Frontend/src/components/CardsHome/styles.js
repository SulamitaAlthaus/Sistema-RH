import styled from "styled-components";
import users from "../../assets/users-gray.svg";
import money from "../../assets/money-gray.svg";
import jobs from "../../assets/jobs-gray.svg";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    a{
        text-decoration: none;
        color: #000000;
    }
`;
export const Card = styled.div`
    display: flex;
    justify-items: center; 
    flex-direction: column;
    height: 25vh;
    width: 30%;
    margin-top: 3%;
    margin-right: 3%;
    border: 1px solid #707070;
    border-radius: 20px;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    :hover{
        border: 2px solid #8A2BE2;
    }

    #header{
        display: flex;
        justify-content: center;
        width: 50%;
        margin: 0 auto 0 auto;
        height: 8vh;
    }
    h2{
        font-size: 1.5rem;
        margin-left: 10%;
    }

    @media only screen and (max-width: 600px) {
        margin: 5% auto;
        height: 23vh;
        width: 80%;
        #header{
            justify-content: center;
            align-items: center;
            height: 30%;
            width: 100%;
        }
        h2{
            font-size: 150%;
            margin: auto auto auto 0;
        }
    }
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5% auto;
    a{
        margin: 1.5% auto;
        text-decoration: none;
        :hover{
            text-decoration: underline;
        }
    }

    @media only screen and (max-width: 600px) {
        a{
            font-size: 90%;
        }
    }

`;
export const Users = styled.img.attrs({ src: `${users}` })`
    width: 45px;
    height: 8vh;
    margin-left: 10%;
    margin-top: 5%;
    
    @media only screen and (max-width: 600px) {
        height: 50%;
        margin: auto 0 auto auto;
    }

`;
export const Money = styled.img.attrs({ src: `${money}` })`
    width: 45px;
    height: 8vh;
    margin-left: 10%;
    margin-top: 5%;

    @media only screen and (max-width: 600px) {
        height: 50%;
        margin: auto 0 auto auto;
    }

`;
export const Jobs = styled.img.attrs({ src: `${jobs}` })`
    width: 40px;
    height: 8vh;
    margin-left: 10%;
    margin-top: 5%;

    @media only screen and (max-width: 600px) {
        height: 50%;
        margin: auto 0 auto auto;
    }

`;