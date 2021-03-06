import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import { format } from 'date-fns'
import Cep from "react-simple-cep-mask";
import api from "../../service/api"
import BuscaCep from "cep-promise"
import Cnpj from "@react-br-forms/cpf-cnpj-mask";
import Telefone from 'react-input-mask';

function Register() {
    const [msgSuccess, setMsgSuccess] = useState("");
    const [msgError, setMsgError] = useState("");
    const [msgErrorUser, setMsgErrorUser] = useState("");
    const [msgErrorCep, setMsgErrorCep] = useState("");
    const [msgErrorCepA, setMsgErrorCepA] = useState("");
    const [date, setDate] = useState();
    const [cepCompany, setCepCompany] = useState("");
    const [cep, setCep] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [mask, setMask] = useState("");
    const [matricula, setMatricula] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [telefoneA, setTelefoneA] = useState("");
    const [segmento, setSegmento] = useState("");
    const [numero, setNumero] = useState("");
    const [rua, setRua] = useState("");
    const [ruaA, setRuaA] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidade, setCidade] = useState("");
    const [cidadeA, setCidadeA] = useState("");
    const [estado, setEstado] = useState("");
    const [estadoA, setEstadoA] = useState("");
    const [companyId, setCompanyId] = useState("");
    const [email, setEmail] = useState("");
    const [funcao, setFuncao] = useState("");
    const [dataNascimento, setDataNasc] = useState("");
    const [dataAdm, setDataAdm] = useState("");
    const [password1, setPassword1] = useState("");
    const [password, setPassword] = useState("");


    function defineDate() {
        setDate(format(new Date, 'yyyy-MM-dd'))
    }

    function disableCompany() {
        let company = document.getElementsByName("company")
        for (var i = 0; i < company.length; i++) {
            company[i].setAttribute("disabled", "");
        }
    }

    function disableAdmin(prop) {
        let company = document.getElementsByName("admin")
        if (prop) {
            for (var i = 0; i < company.length; i++) {
                company[i].setAttribute("disabled", "");
            }
        } else {
            for (var i = 0; i < company.length; i++) {
                company[i].removeAttribute("disabled", "");
            }

        }
    }
    function BuscarCep(valor) {
        if (valor && valor.length === 9) {
            BuscaCep(valor, { timeout: 5000, providers: ['brasilapi'] })
                .then((res) => {
                    if (valor === cepCompany) {
                        setRua(res.street)
                        setCidade(res.city)
                        setEstado(res.state)
                    } else if (valor === cep) {
                        setRuaA(res.street)
                        setCidadeA(res.city)
                        setEstadoA(res.state)
                    }
                }).catch(err => {
                    if (valor === cepCompany) {
                        setMsgErrorCep("CEP n??o encontrado")
                    }
                    else {
                        setMsgErrorCepA("CEP n??o encontrado")
                    }
                })
        }
    }

    function ValidatePassword(valor) {
        if (password1 === valor) {
            setPassword(valor)
            document.getElementById('password2').setAttribute("style", "border-color: #CACFD2");
        } else {
            document.getElementById('password2').setAttribute("style", "border-color: #FF0000");
        }
    }

    async function saveCompany() {
        await api.post(`/register/newcompany`,
            {
                cnpj, nome, telefone, segmento,
                cep: cepCompany, numero, rua, complemento, cidade, estado
            }
        ).then((response) => {
            disableAdmin(false);
            disableCompany();
            setCompanyId(response.data)
            setMsgSuccess("Empresa cadastrada")
        }).catch((err) => {
            setMsgError("Verifique os campos em vermelho")
            let company = document.getElementsByName("company")
            let cep = document.getElementById("cep")
            for (var i = 0; i < company.length; i++) {
                if (!company[i].value) {
                    company[i].setAttribute("style", "border-color: #FF0000");
                    if (!cep.value) {
                        cep.setAttribute("style", "border-color: #FF0000");
                    } else {
                        cep.setAttribute("style", "border-color: #CACFD2");
                    }
                } else {
                    company[i].setAttribute("style", "border-color: #CACFD2");
                }
            }
        })


    }

    async function saveAdmin() {
        await api.post(`/register/newuser`,
            {
                companyId, matricula, nome, email, telefone: telefoneA, dataNasc: `${dataNascimento}T16:08:08.061Z`,
                funcao, dataAdmissao: `${dataAdm}T16:08:08.061Z`, password,
                cep, numero, rua: ruaA, complemento, cidade: cidadeA, estado: estadoA, roleId: 1
            }
        ).then(() => {
            window.location.replace('/')
        }).catch((err) => {
            setMsgErrorUser("Verifique os campos em vermelho")
            let admin = document.getElementsByName("admin")
            for (var i = 0; i < admin.length; i++) {
                if (!admin[i].value) {
                    admin[i].setAttribute("style", "border-color: #FF0000");
                } else {
                    admin[i].setAttribute("style", "border-color: #CACFD2");
                }
            }
        })

        if (dataNascimento === "" || dataAdm === "") {
            document.getElementById("dataNasc").setAttribute("style", "border-color: #FF0000");
            document.getElementById("dataAdmissao").setAttribute("style", "border-color: #FF0000");
        }
    }

    useEffect(() => {
        defineDate();
        disableAdmin(true);
    }, [])

    return (
        <S.Container>
            <S.Company>
                <S.Form>
                    {!msgError ? null : <div id="msgError"> <p>{msgError}</p></div>}
                    {!msgSuccess ? null : <div id="msgSuccess"> <p>{msgSuccess}</p></div>}
                    <form id="company">
                        <h1>Empresa</h1>
                        <label for="cnpj">CNPJ:</label>
                        <Cnpj id="cnpj" value={cnpj} name="company" onChange={(e, type) => { setCnpj(e.target.value); setMask(type === "CNPJ"); }} /><br />
                        <label for="nome">Nome Fantasia:</label>
                        <input id="nome" type="text" name="company" onChange={e => setNome(e.target.value)} />
                        <label for="telefone">Telefone:</label>
                        <Telefone mask="(99) 99999 9999" id="telefone" name="company" onChange={e => setTelefone(e.target.value)} /><br />
                        <label for="segmento">Segmento:</label>
                        <input id="segmento" type="text" name="company" onChange={e => setSegmento(e.target.value)} />
                        <h3>Endere??o</h3>
                        {!msgErrorCep ? null : <div id="msgErrorCep"> <p>{msgErrorCep}</p></div>}
                        <label for="cep">CEP:</label>
                        <Cep id="cep" value={cepCompany} defaultValue={cepCompany} onChange={BuscarCep(cepCompany), (cepCompany) => setCepCompany(cepCompany)} />
                        <label for="numero">N??mero:</label>
                        <input id="numero" type="text" name="company" onChange={e => setNumero(e.target.value)} /><br />
                        <label for="rua">Rua:</label>
                        <input id="rua" type="text" name="company" defaultValue={rua} onChange={e => setRua(e.target.value)} />
                        <label for="complemento">Complemento:</label>
                        <input id="complemento" type="text" name="company" defaultValue=" " onChange={e => setComplemento(e.target.value)} />
                        <label for="cidade">Cidade: </label>
                        <input id="cidade" type="text" name="company" defaultValue={cidade} onChange={e => setCidade(e.target.value)} />
                        <label for="estado">Estado</label>
                        <input id="estado" type="text" name="company" defaultValue={estado} onChange={e => setEstado(e.target.value)} />
                    </form>
                    <S.Button onClick={saveCompany} name="company">CADASTRAR</S.Button>
                </S.Form>
            </S.Company>
            <hr />
            <S.Account>
                <S.Form id="admin">
                    {!msgErrorUser ? null : <div id="msgErrorUser"> <p>{msgErrorUser}</p></div>}
                    <h1>Administrador</h1>
                    <form>
                        <label for="matricula">Matricula:</label>
                        <input id="matricula" type="text" name="admin" onChange={e => setMatricula(e.target.value)} /><br />
                        <label for="nome">Nome:</label>
                        <input id="nome" type="text" name="admin" onChange={e => setNome(e.target.value)} /><br />
                        <label for="email">Email:</label>
                        <input id="email" type="email" name="admin" onChange={e => setEmail(e.target.value)} /><br />
                        <label for="telefone">Telefone:</label>
                        <Telefone mask="(99) 99999 9999" id="telefone" name="admin" onChange={e => setTelefoneA(e.target.value)} /><br />
                        <label for="dataNasc">Data Nasc:</label>
                        <input id="dataNasc" type="date" defaultValue={date}
                            min="1920-01-01" max={date} name="admin" onChange={e => setDataNasc(e.target.value)} /><br />
                        <label for="funcao">Fun????o:</label>
                        <input id="funcao" type="text" name="admin" onChange={e => setFuncao(e.target.value)} /><br />
                        <label for="dataAdmissao">Data Admissao:</label>
                        <input id="dataAdmissao" type="date" defaultValue={date}
                            min="1920-01-01" max={date} name="admin" onChange={e => setDataAdm(e.target.value)} /><br />
                        <label for="password1">Senha:</label>
                        <input id="password1" type="password" name="admin" onChange={e => setPassword1(e.target.value)} /><br />
                        <label for="password2">Confirme a Senha:</label>
                        <input id="password2" type="password" name="admin" onChange={e => ValidatePassword(e.target.value)} />
                        <h3>Endere??o</h3>
                        {!msgErrorCepA ? null : <div id="msgErrorCepA"> <p>{msgErrorCepA}</p></div>}
                        <label for="cep">CEP:</label>
                        <Cep id="cep" value={cep} onChange={BuscarCep(cep), (cep) => setCep(cep)} name="admin" />
                        <label for="numero">N??mero:</label>
                        <input id="numero" type="text" name="admin" onChange={e => setNumero(e.target.value)} /><br />
                        <label for="rua">Rua:</label>
                        <input id="rua" type="text" name="admin" defaultValue={ruaA} onChange={e => setRuaA(e.target.value)} />
                        <label for="complemento">Complemento:</label>
                        <input id="complemento" type="text" name="admin" defaultValue=" " onChange={e => setComplemento(e.target.value)} />
                        <label for="cidade">Cidade: </label>
                        <input id="cidade" type="text" name="admin" defaultValue={cidadeA} onChange={e => setCidadeA(e.target.value)} />
                        <label for="estado">Estado</label>
                        <input id="estado" type="text" name="admin" defaultValue={estadoA} onChange={e => setEstadoA(e.target.value)} />
                    </form>
                    <S.Button onClick={saveAdmin} name="admin">CADASTRAR</S.Button>
                </S.Form>
            </S.Account>
        </S.Container>
    )
}
export default Register;