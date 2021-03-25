import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    padding: 10px;
    height: 90vh;
    width: 95%;
    border: 5px solid #8A2BE2;
    border-radius: 20px;
    font-family: Arial, Helvetica, sans-serif;

    hr{
        background-color: #8A2BE2;
        height: 80vh;
        width: 3px;

    }
    @media only screen and (max-width: 1000px){
        display: grid;
        flex-direction: column;
        height: 100%;
        width: 85%;
        margin: 5%;
        hr{
            background-color: #8A2BE2;
            height: 1vh;
            width: 80%;

    } 
  }
`;

export const Company = styled.div`
    width: 45%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    
    @media only screen and (max-width: 1000px){
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: auto;
        width: 100%;
        top: 0;
  }

`;

export const Account = styled.div`
    width: 45%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    @media only screen and (max-width: 1000px){
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: auto;
        width: 100%;
  }

`;

export const Form = styled.div`
    padding: 50px;
    #msgError, #msgErrorUser {
    color: #FF0000;
    width: 85%;
    height: 25px;
    text-align: center;
    background-color: #EEA3A3;
    border-radius: 10px;
    margin-bottom:-15px;
    }
    #msgSuccess {
    color: #2F4F4F;
    width: 85%;
    height: 25px;
    text-align: center;
    background-color: #90EE90;
    border-radius: 10px;
    }
    #msgErrorCep, #msgErrorCepA{
        color: #FF0000;
        font-size: 0.2;
        margin:-15px 0;
    }
    h1,h3{
        margin-bottom: 2px;
    }
    label{
        margin-right: 5px;
    }
    input{
        padding: 5px 10px;
        outline: none;
        width: 80%;
        border: 1px solid #CACFD2;
        border-radius: 80px;
        margin-top: 5px;
        margin-right: 10px;
        :hover{
            border: 1px solid #8A2BE2;
        }
        :focus{
            border: 1px solid #8A2BE2;
        }
        :disabled {
            :hover{
                border: 1px solid #D3D3D3;
            }
            :focus{
                border: 1px solid #D3D3D3;
            }
        }
    }
    #nome, #email, #segmento{
        width: 60%;
    }
    #telefone{
        width: 40%;
    }
    #numero, #estado{
        width: 20%;
    }
    #dataNasc, #dataAdmissao{
        width: 30%;
    }
    #funcao, #password1, #password2{
        width: 50%;
    }
    #cep, #cidade{
        width: 30%;
    }
    #complemento{
        width: 65%;
    }
    @media only screen and (max-width: 1000px){
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 5% auto;
        width: 100%;
        input{
            width: 90%;
        }
        #nome, #email, #segmento, #telefone, #numero, #estado,
        #dataNasc, #dataAdmissao, #funcao, #password1, #password2,
        #cep, #cidade, #complemento{
            width: 90%;
        }#msgError, #msgErrorUser,#msgSuccess {
            height: 50px;
            margin: auto;
        }
    }
`;

export const Button = styled.button`
    width: 140px;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 20px;
    margin-top: 10px;
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