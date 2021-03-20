import React from 'react';
import * as S from "./styles";


function Register() {
    return (
        <S.Container>
            <S.Company>
                <S.Form>
                    <h1>Empresa</h1>
                    <form>
                        <label for="cnpj">CNPJ:</label>
                        <input id="cnpj" />
                        <label for="nome">Nome Fantasia:</label>
                        <input id="nome" />
                        <label for="telefone">Telefone:</label>
                        <input id="telefone" /><br />
                        <label for="segmento">Segmento:</label>
                        <input id="segmento" />
                        <h3>Endereço</h3>
                        <label for="cep">CEP:</label>
                        <input id="cep" />
                        <label for="numero">Número:</label>
                        <input id="numero" /><br />
                        <label for="rua">Rua:</label>
                        <input id="rua" />
                        <label for="complemento">Complemento:</label>
                        <input id="complemento" />
                        <label for="cidade">Cidade: </label>
                        <input id="cidade" />
                        <label for="estado">Estado</label>
                        <input id="estado" />
                    </form>
                    <S.Button>CADASTRAR</S.Button>
                </S.Form>
            </S.Company>
            <hr />
            <S.Account>
                <S.Form>
                    <h1>Administrador</h1>
                    <form>
                        <label for="nome">Nome:</label>
                        <input id="nome" /><br />
                        <label for="email">Email:</label>
                        <input id="email" /><br />
                        <label for="telefone">Telefone:</label>
                        <input id="telefone" /><br />
                        <label for="matricula">Matricula:</label>
                        <input id="matricula" />
                        <label for="dataNasc">Data Nasc:</label>
                        <input id="dataNasc" />
                        <label for="funcao">Função:</label>
                        <input id="funcao" /><br />
                        <label for="dataAdmissao">Data Admissao:</label>
                        <input id="dataAdmissao" /><br />
                        <label for="password1">Senha:</label>
                        <input id="password1" /><br />
                        <label for="password2">Confirme a Senha:</label>
                        <input id="password2" />
                        <h3>Endereço</h3>
                        <label for="cep">CEP:</label>
                        <input id="cep" />
                        <label for="numero">Número:</label>
                        <input id="numero" /><br />
                        <label for="rua">Rua:</label>
                        <input id="rua" />
                        <label for="complemento">Complemento:</label>
                        <input id="complemento" />
                        <label for="cidade">Cidade: </label>
                        <input id="cidade" />
                        <label for="estado">Estado</label>
                        <input id="estado" />
                    </form>
                    <S.Button>CADASTRAR</S.Button>
                </S.Form>
            </S.Account>
        </S.Container>
    )
}
export default Register;