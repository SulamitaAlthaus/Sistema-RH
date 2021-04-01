import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 5px;
    height: 90vh;
    width: 95%;
    border: 5px solid #8A2BE2;
    border-radius: 20px;
    font-family: 'Segoe UI', sans-serif;
    
    hr{
        background-color: #8A2BE2; 
        width: 90%;
    }

    #msgErrorUser{
        display: block;
        margin-bottom: 3%;
        color: #FF0000;
        width: 85%;
        height: 25px;
        text-align: center;
        background-color: #EEA3A3;
        border-radius: 10px;
        margin-bottom:-15px;
        p{
            margin: 0;
        }

    }
`;

export const Header = styled.div`
    display: flex;
    width: 80%;
    padding: 0 20vw; 
    align-items: center;
    justify-content: space-between;
`;
export const Account = styled.div`
    margin: 2%;
    padding: 0 10vw;
    width: 75%;
    height: 100%;
    overflow-y: scroll;


    ::-webkit-scrollbar {
        width: 1vw;
        margin-right: 3vw;
        background-color: #ECECEC;
        border-radius: 20px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #8A2BE2;
        border-radius: 10px;
    }
    
    #admin{
        width: 40%;
        display: flex;
        justify-content: space-between;
    }

    label{
        width: 100%;
        text-align: left;
        margin-bottom: 3%;
        height: 5vh;
    }
    input{
        width: 60%;
        height: 5vh;
        border: 1px solid #999999;
        border-radius: 20px;
        margin-left: 3%;
        outline: none;
        padding-left: 3%;
        :focus, :hover{
            border: 1px solid #8A2BE2;
        }
    }

    #user{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        width: 100%;
        height: 50%;
        margin-bottom: 5%;
    }
    #address{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        width: 100%;
        height: 50%;
    }
`;


export const Button = styled.button`
    width: 140px;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    font-family: Arial, sans-serif;
    background-color: #8A2BE2;
    color: #FFFFFF;
    :hover{
        border: 1px solid #D3D3D3;
    }
    :disabled {
        background-color: #D3D3D3;
        cursor: auto;
    }
`;