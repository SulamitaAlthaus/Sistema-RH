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
`;

export const Company = styled.div`
    width: 45%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

export const Account = styled.div`
    width: 45%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

export const Form = styled.div`
    padding: 50px;
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
    }
    #nome{
        width: 60%;
    }
    #telefone{
        width: 40%;
    }
    #segmento{
        width: 60%;
    }
    #email{
        width: 60%;
    }
    #matricula{
        width: 20%;
    }
    #dataNasc{
        width: 25%;
    }
    #funcao{
        width: 50%;
    }
    #dataAdmissao{
        width: 25%;
    }
    #password1, #password2 {
        width: 50%;
    }
    #cep{
        width: 30%;
    }
    #numero{
        width: 20%;
    }
    #complemento{
        width: 65%;
    }
    #cidade{
        width: 30%;
    }
    #estado{
        width: 20%;
    }
`;

export const Button = styled.button`
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 20px;
    margin-top: 5px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    font-family: Arial, sans-serif;
    background-color: #8A2BE2;
    color: #FFFFFF;
    :hover{
        border: 1px solid #D3D3D3;
    }
`;