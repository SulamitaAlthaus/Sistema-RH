import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    transition: width 0.5s ;
    
    a{
        display: flex;
        flex-direction: column;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        width: 200%;
        height: 100%;
    }

    label{
        display: none;
        cursor: pointer;
    }

    :hover{
        width: 15%;
        label{
            display: flex;
            color: #FFFFFF;
            margin-top: 3px;
        }
    }
    #menu1{
        display: grid;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    @media only screen and (max-width: 600px) {
        height: 8%;
        width: 100%;
        justify-content: space-between;
        margin: auto;
        :hover{
            width: 110%;
        }
        #menu1{
            display: flex;
            flex-direction: row;
        }
        label{
            display: none;
        }
    }
    

`;

export const Account = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    height: 50%;
    width: 100%;
    text-align: center;
    cursor: pointer;
    img{
        width: 3vw;
    }
    @media only screen and (max-width: 600px) {
        width: 20%;
        height: 100%;
        :hover{
            width: 110%;
        }
        img{
            width: 8vw;
        }
    }

`;

export const Menu = styled.div`
    display: grid;
    width: 100%;
    height: 70%;
    justify-items: center;

    #menu{
        padding: 2% 0;
        display: grid;
        justify-items: center;
        align-items: center;
        width: 100%;
        margin: auto;
        height: 100%;
        img{
            width: 2.5vw;
        }
    }
    @media only screen and (max-width: 600px) {
        display: flex;
        height: 100%;
        width: 50%;
        #menu{
            padding: 0;
            img{
                width: 8vw;
            }
        }
    }


`;

export const Logout = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 50%;
    cursor: pointer;

    img{
        width: 2vw;
    }
    @media only screen and (max-width: 600px) {
        width: 20%;
        height: 100%;
        :hover{
            width: 110%;
        }
        img{
            width: 8vw;
        }
    }

`;
