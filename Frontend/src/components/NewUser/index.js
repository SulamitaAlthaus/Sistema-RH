import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import { format } from 'date-fns';
import Cep from "react-simple-cep-mask";
import api from "../../service/api";
import BuscaCep from "cep-promise";
import Telefone from 'react-input-mask';
import SideMenu from "../sidemenu";
import Switch from "react-switch";

function NewUser() {
    const [msgErrorUser, setMsgErrorUser] = useState("");
    const [msgErrorCep, setMsgErrorCep] = useState("");
    const [date, setDate] = useState();
    const [cep, setCep] = useState("");
    const [mask, setMask] = useState("");
    const [matricula, setMatricula] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [numero, setNumero] = useState("");
    const [rua, setRua] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [email, setEmail] = useState("");
    const [funcao, setFuncao] = useState("");
    const [dataNascimento, setDataNasc] = useState("");
    const [dataAdm, setDataAdm] = useState("");
    const [password1, setPassword1] = useState("");
    const [password, setPassword] = useState("");
    const [roleId, setRoleId] = useState(2);
    const [checked, setChecked] = useState(false);
    const company = localStorage.getItem('@companyId')


    const handleChange = nextChecked => {
        setChecked(nextChecked);
        { checked ? setRoleId(1) : setRoleId(2) }
    };

    function defineDate() {
        setDate(format(new Date, 'yyyy-MM-dd'))
    }

    function BuscarCep(valor) {
        if (valor && valor.length === 9) {
            BuscaCep(valor, { timeout: 5000, providers: ['brasilapi'] })
                .then((res) => {
                    if (valor === cep) {
                        setRua(res.street)
                        setCidade(res.city)
                        setEstado(res.state)
                    }
                }).catch(err => {
                    setMsgErrorCep("CEP não encontrado")
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

    async function saveUser() {
        console.log(roleId)
        await api.post(`/register/newuser`,
            {
                companyId: company, matricula, nome, email, telefone, dataNasc: `${dataNascimento}T16:08:08.061Z`,
                funcao, dataAdmissao: `${dataAdm}T16:08:08.061Z`, password,
                cep, numero, rua, complemento, cidade, estado, roleId
            }
        ).then(() => {
            window.location.replace('/users')
        }).catch((err) => {
            setMsgErrorUser("Verifique os campos em vermelho")
            let user = document.getElementsByName("user")
            for (var i = 0; i < user.length; i++) {
                if (!user[i].value) {
                    user[i].setAttribute("style", "border-color: #FF0000");
                } else {
                    user[i].setAttribute("style", "border-color: #CACFD2");
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
    }, [])

    return (<div>
        <SideMenu />
        <S.Container>
            <S.Header>
                <h1>Novo Usuário</h1>
                <S.Button onClick={saveUser}>CADASTRAR</S.Button>
            </S.Header>
            <hr />
            {!msgErrorUser ? null : <div id="msgErrorUser"> <p>{msgErrorUser}</p></div>}
            <S.Account>
                <div id="user">
                    <label for="admin" id="admin">Administrador:
                    <Switch id="admin"
                            onChange={handleChange}
                            checked={checked}
                            onColor={'#8A2BE2'} height={20} width={50}
                        /></label>
                    <label for="matricula">Matricula:
                            <input id="matricula" type="text" name="user" onChange={e => setMatricula(e.target.value)} /></label>
                    <label for="nome">Nome:
                        <input id="nome" type="text" name="user" onChange={e => setNome(e.target.value)} /></label>
                    <label for="email">Email:
                        <input id="email" type="email" name="user" onChange={e => setEmail(e.target.value)} /></label>
                    <label for="telefone">Telefone:
                        <Telefone mask="(99) 99999 9999" id="telefone" name="user" onChange={e => setTelefone(e.target.value)} /></label>
                    <label for="dataNasc">Data Nasc:
                        <input id="dataNasc" type="date" defaultValue={date}
                            min="1920-01-01" max={date} name="user" onChange={e => setDataNasc(e.target.value)} /></label>
                    <label for="funcao">Função:
                        <input id="funcao" type="text" name="user" onChange={e => setFuncao(e.target.value)} /></label>
                    <label for="dataAdmissao">Data Admissao:
                        <input id="dataAdmissao" type="date" defaultValue={date}
                            min="1920-01-01" max={date} name="user" onChange={e => setDataAdm(e.target.value)} /></label>
                    <label for="password1">Senha:
                        <input id="password1" type="password" name="user" onChange={e => setPassword1(e.target.value)} /></label>
                    <label for="password2">Confirme a Senha:
                        <input id="password2" type="password" name="user" onChange={e => ValidatePassword(e.target.value)} /></label>
                </div>
                <br />
                <h3>Endereço</h3>
                {!msgErrorCep ? null : <div id="msgErrorCep"> <p>{msgErrorCep}</p></div>}
                <div id="address">
                    <label for="cep">CEP:
                        <Cep id="cep" value={cep} onChange={BuscarCep(cep), (cep) => setCep(cep)} name="user" /></label>
                    <label for="numero">Número:
                        <input id="numero" type="text" name="user" onChange={e => setNumero(e.target.value)} /></label>
                    <label for="rua">Rua:
                        <input id="rua" type="text" name="user" defaultValue={rua} onChange={e => setRua(e.target.value)} /></label>
                    <label for="complemento">Complemento:
                        <input id="complemento" type="text" name="user" defaultValue=" " onChange={e => setComplemento(e.target.value)} /></label>
                    <label for="cidade">Cidade:
                        <input id="cidade" type="text" name="user" defaultValue={cidade} onChange={e => setCidade(e.target.value)} /></label>
                    <label for="estado">Estado
                        <input id="estado" type="text" name="user" defaultValue={estado} onChange={e => setEstado(e.target.value)} /></label>
                </div>
            </S.Account>
        </S.Container>
    </div>
    )
}
export default NewUser;