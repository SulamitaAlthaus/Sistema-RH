import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 5%;
    background-color: #8A2BE2;
    font-family: 'Segoe UI', sans-serif;
    font-size: 0.9rem;
    margin-top: -20px;
    color: #FFFFFF;
    font-weight: 500;
    transition: width 0.8s ;
    
    a{
        display: flex;
        flex-direction: column;
        text-decoration: none;
        align-items: center;
    }

    label{
        display: none;
    }

    :hover{
        width: 15%;
        label{
            display: flex;
            color: #FFFFFF;
            margin-top: 3px;
        }
    }
`;

export const Account = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 10%;
    height: 15%;
    width: 100%;
    text-align: center;
    cursor: pointer;
    img{
        width: 3vw;
    }
    :hover{
        background-color: #9A31FA;
    }

`;

export const Menu = styled.div`
    display: grid;
    width: 100%;
    height: 30%;
    justify-items: center;

    #menu{
        padding: 2% 0;
        display: grid;
        justify-items: center;
        align-items: center;
        width: 100%;
        margin: auto;
        height: 70%;
        img{
            width: 2.5vw;
        }
        :hover{
            background-color: #9A31FA;
        }
    }


`;

export const Logout = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    width: 100%;
    cursor: pointer;

    img{
        width: 2vw;
    }
    :hover{
        background-color: #9A31FA;
    }
`;
