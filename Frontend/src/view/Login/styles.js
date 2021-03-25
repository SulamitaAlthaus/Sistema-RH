import styled from "styled-components";
import account from '../../assets/account.png'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: -10px;
  height: 100vh;
  width: 100vw;

  @media only screen and (max-width: 600px){
    display: flex;
    flex-direction: column;
    align-items: center; 
    background: #8A2BE2;
    height: 100%;
    margin: auto;
    overflow-y: hidden;
  }
`;
export const Left = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 100%;
    margin-left: -10px;
    background: #8A2BE2;
    padding: 45px;

    @media only screen and (max-width: 600px){
      padding: 5%;
      margin: auto;
      margin-top: 5%;
    }
`;
export const Slogan = styled.div`
    height: 90%;
    width: 100%;
    border: 6px solid #FFFFFF;
`;
export const Text = styled.div` 
    position: absolute;
    bottom: 10%;
    padding: 45px;
    width: 30%;
    color: #FFFFFF;
    font-size: 5.5rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;

    @media only screen and (max-width: 600px){
      position: relative;
      font-size: 2rem;
      padding: 0 10px;
      width: 80%;
      text-align: center;
      margin: auto;
    }
`;
export const Image = styled.img.attrs({ src: `${account}` })`
    width: 40%;
    margin-bottom: 10px;
`;

export const Form = styled.form`
  width: 40vw;
  background: #FFFFFF;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  p {
    color: #861212;
    padding: 1vh;
    width: 85%;
    text-align: center;
    background-color: #EEA3A3;
    border-radius: 10px;
  }
  input {
    flex: 1;
    outline: none;
    height: 10vh;
    margin-bottom: 15px;
    padding: 2vh;
    text-align: center;
    color: #777777;
    font-size: 15px;
    width: 70%;
    border: 1px solid #777777;
    border-radius: 80px;
    &::placeholder {
      color: #999999;
    }
  }
  button {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    background:  #8A2BE2;
    outline: none;
    height: 8vh;
    border: 0;
    border-radius: 80px;
    width: 20vw;
    cursor: pointer;

    :hover{
      opacity: 0.9;
    }
  }
  h3{
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 2px;
  }
  a {
    font-weight: bold;
    color: #8A2BE2;
    text-decoration: none;
  }
  @media only screen and (max-width: 600px){
    margin-top: 10%;
    width: 70%;
    margin-bottom: 50%;
    p {
      font-size: 0.7rem;
    }
    input {
      width: 95%;
      height: 5%;
    }
    button{
      width: 55%;
      font-size: 0.9rem;
      height: 5vh;
    } 
    h3{
      font-size: 0.9rem;
  }
  }
`;