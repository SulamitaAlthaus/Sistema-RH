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