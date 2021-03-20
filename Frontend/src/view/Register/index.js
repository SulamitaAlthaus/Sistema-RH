import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import { format } from 'date-fns'
import Cep from "react-simple-cep-mask";
import api from "../../service/api"

function Register() {
    const [date, setDate] = useState();
    const [cepCompany, setCepCompany] = useState("");
    const [cep, setCep] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [segmento, setSegmento] = useState("");
    const [numero, setNumero] = useState("");
    const [rua, setRua] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [companyId, setCompanyId] = useState("");
    const [email, setEmail] = useState("");
    const [funcao, setFuncao] = useState("");
    const [dataNascimento, setDataNasc] = useState("");
    const [dataAdm, setDataAdm] = useState("");
    const [password, setPassword] = useState("");


    function defineDate(){
        setDate(format(new Date, 'yyyy-MM-dd'))
    }

    function disableCompany(){
        let company = document.getElementsByName("company")
        for(var i=0; i<company.length; i++){
            company[i].setAttribute("disabled", "");
        }
    }

    function disableAdmin(prop){
        let company = document.getElementsByName("admin")
        if(prop){
            for(var i=0; i<company.length; i++){
                company[i].setAttribute("disabled", "");}
        } else {
            for(var i=0; i<company.length; i++){
                company[i].removeAttribute("disabled", "");}

        }
    }
    async function saveCompany(){
        await api.post(`/register/newcompany`,
            { cnpj, nome, telefone, segmento, 
                cep: cepCompany, numero, rua, complemento, cidade, estado }
        ).then((response) => {
            disableAdmin(false);
            disableCompany();
            setCompanyId(response.data)
            alert("Empresa cadastrada")
        }).catch((err) => {
            console.log(err)
        })


    }

    async function saveAdmin() {
        await api.post(`/register/newuser`,
            {   companyId:1, nome, email, telefone, dataNasc:`${dataNascimento}T16:08:08.061Z`, funcao, dataAdmissao: `${dataAdm}T16:08:08.061Z`, password,
                cep, numero, rua, complemento, cidade, estado}
        ).then(() => {
            alert("Usuário cadastrado")
            window.location.replace('/home')
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        defineDate();
        disableAdmin(true);
      }, [])

    return (
        <S.Container>
            <S.Company>
                <S.Form>
                    <form id="company">
                        <h1>Empresa</h1>
                        <label for="cnpj">CNPJ:</label>
                        <input id="cnpj" type="text" name="company" onChange={e => setCnpj(e.target.value)} />
                        <label for="nome">Nome Fantasia:</label>
                        <input id="nome" type="text" name="company" onChange={e => setNome(e.target.value)} />
                        <label for="telefone">Telefone:</label>
                        <input id="telefone" type="text" name="company" onChange={e => setTelefone(e.target.value)} /><br />
                        <label for="segmento">Segmento:</label>
                        <input id="segmento" type="text" name="company" onChange={e => setSegmento(e.target.value)} />
                        <h3>Endereço</h3>
                        <label for="cep">CEP:</label>
                        <Cep id="cep" value={cepCompany} onChange={ (cepCompany) => setCepCompany(cepCompany) } />
                        <label for="numero">Número:</label>
                        <input id="numero" type="text" name="company" onChange={e => setNumero(e.target.value)} /><br />
                        <label for="rua">Rua:</label>
                        <input id="rua" type="text" name="company" onChange={e => setRua(e.target.value)} />
                        <label for="complemento">Complemento:</label>
                        <input id="complemento" type="text" name="company" onChange={e => setComplemento(e.target.value)} />
                        <label for="cidade">Cidade: </label>
                        <input id="cidade" type="text" name="company" onChange={e => setCidade(e.target.value)} />
                        <label for="estado">Estado</label>
                        <input id="estado" type="text" name="company" onChange={e => setEstado(e.target.value)} />
                    </form>
                    <S.Button onClick={saveCompany} name="company">CADASTRAR</S.Button>
                </S.Form>
            </S.Company>
            <hr />
            <S.Account>
                <S.Form id="admin">
                    <h1>Administrador</h1>
                    <form>
                        <label for="nome">Nome:</label>
                        <input id="nome" type="text" name="admin"  onChange={e => setNome(e.target.value)}/><br />
                        <label for="email">Email:</label>
                        <input id="email" type="email" name="admin"  onChange={e => setEmail(e.target.value)}/><br />
                        <label for="telefone">Telefone:</label>
                        <input id="telefone" type="text" name="admin"  onChange={e => setTelefone(e.target.value)}/><br />
                        <label for="dataNasc">Data Nasc:</label>
                        <input id="dataNasc" type="date" defaultValue={date}
                            min="1920-01-01" max={date} name="admin"  onChange={e => setDataNasc(e.target.value)}/><br />
                        <label for="funcao">Função:</label>
                        <input id="funcao" type="text" name="admin"  onChange={e => setFuncao(e.target.value)}/><br />
                        <label for="dataAdmissao">Data Admissao:</label>
                        <input id="dataAdmissao" type="date" defaultValue={date}
                            min="1920-01-01" max={date} name="admin"  onChange={e => setDataAdm(e.target.value)}/><br />
                        <label for="password1">Senha:</label>
                        <input id="password1" type="password" name="admin"  onChange={e => setPassword(e.target.value)}/><br />
                        <label for="password2">Confirme a Senha:</label>
                        <input id="password2" type="password" name="admin"  />
                        <h3>Endereço</h3>
                        <label for="cep">CEP:</label>
                        <Cep id="cep" value={cep} onChange={ (cep) => setCep(cep) } name="admin"/>
                        <label for="numero">Número:</label>
                        <input id="numero" type="text" name="admin"  onChange={e => setNumero(e.target.value)}/><br />
                        <label for="rua">Rua:</label>
                        <input id="rua" type="text" name="admin"  onChange={e => setRua(e.target.value)}/>
                        <label for="complemento">Complemento:</label>
                        <input id="complemento" type="text" name="admin"  onChange={e => setComplemento(e.target.value)}/>
                        <label for="cidade">Cidade: </label>
                        <input id="cidade" type="text" name="admin"  onChange={e => setCidade(e.target.value)}/>
                        <label for="estado">Estado</label>
                        <input id="estado" type="text" name="admin"  onChange={e => setEstado(e.target.value)}/>
                    </form>
                    <S.Button onClick={saveAdmin} name="admin">CADASTRAR</S.Button>
                </S.Form>
            </S.Account>
        </S.Container>
    )
}
export default Register;