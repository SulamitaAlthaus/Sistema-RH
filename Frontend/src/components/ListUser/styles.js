import styled from "styled-components";
import user from "../../assets/user-gray.svg";

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
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2% auto;
    width: 80%;
    height: 7%;

    #buttons{
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    }
`;

export const Title = styled.div`
    width: 30%;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
`;

export const Msg = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    background-color: rgba(0,0,0,.3);
    position: absolute;

    span{
        text-align: center;
        background-color: #FFFFFF;
        position: relative;
        font-family: 'Segoe UI', sans-serif;
        width: 30%;
        height: 20%;
        border: 3px solid #8A2BE2;
        border-radius: 20px;
        margin: auto;

        button{
            height: 20%;
            font-size: 1rem;
            border-radius: 20px;
            cursor: pointer;
            background-color: #8A2BE2;
            color: #FFFFFF;
            border: none;
            padding: 0 15px;
            outline: none;
            margin-left: 5%;
        }
    }
`;

export const Search = styled.div`
    display: flex;
    width: 60%;
    font-size: 2rem;
    height: 80%;
    font-family: 'Arial', sans-serif;

    input{
        width: 100%;
        height: 70%;
        border: 1px solid #999999;
        border-radius: 20px;
        padding: 5px;
        text-align: center;
        outline: none;
        :focus{
            border: 1px solid #999999 !important;
        }
        :hover{
            border: 1px solid #8A2BE2;
        }
    }
`
export const Button = styled.button`
    height: 100%;
    font-size: 0.8rem;
    border-radius: 20px;
    cursor: pointer;
    background-color: #8A2BE2;
    color: #FFFFFF;
    border: none;
    padding: 0 15px;
    float: right;
    outline: none;
    margin-left: 5%;

    :hover{
        font-weight: 600;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;
    font-size: 1.3rem;
    overflow-y: scroll;
    margin-top: 3%;

    label{
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 1%;
        text-align: right;
    }

    input{
        display: flex;
        height: 60%;
        border: 1px solid #999999;
        border-radius: 20px;
        padding: 5px;
        outline: none;
        font-size: 1.3rem;
        margin-left: 2%;
        :focus{
            border: 1px solid #999999 !important;
        }
        :hover{
            border: 1px solid #8A2BE2;
        }
        :disabled{
            background-color: #FFFFFF;
            color: #000000;
            border: none;
        }
    }
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
    h2{
        width: 80%;
        text-align: left;
    }
    #user{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        width: 80%;
        margin: 0 auto 0 10%;
    }
    #address{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        width: 80%;
        input{
            width: 100%;
        }
    }
`;
export const Users = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 90%;
    width: 80%;
    margin: 0 auto auto 6%;
    padding: 0 5%;
    overflow-y: scroll;
    
`;
export const Card = styled.div`
    display: flex;
    height: 20vh;
    justify-content: center;
    align-items: center;
    width: 30%;
    margin-top: 3%;
    margin-right: 3%;
    border: 1px solid #707070;
    border-radius: 20px;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;

    :hover{
        border: 1.5px solid #8A2BE2;
    }
`;
export const User = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
`;

export const Image = styled.img.attrs({ src: `${user}` })`
    margin-left: 8%;
    height: 8vh;
`;

export const Right = styled.div`
    float: right;
    display: grid;
    justify-content: center;
    width: 60%;
    height: 60%;

    h4{
        margin: 0;
        text-align: center;
        font-size: 1rem;
        font-weight: 500;
    }
`;