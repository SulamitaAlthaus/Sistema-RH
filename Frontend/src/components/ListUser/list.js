import React, { useEffect, useState } from 'react';
import * as S from "./styles";
import api from "../../service/api"
import SideMenu from "../sidemenu"
import { format } from 'date-fns'
import BuscaCep from "cep-promise"
import Cep from "react-simple-cep-mask";
import Switch from "react-switch";
import Telefone from 'react-input-mask';

function User({ matricula, funcao, nome, email, numero, complemento }) {
    const [user, setUser] = useState({})
    const [dataNasc, setDataNasc] = useState("")
    const [dataAdmissao, setDataAdmissao] = useState("")
    const [msgErrorCep, setMsgErrorCep] = useState("");
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [roleId, setRoleId] = useState();
    const [checked, setChecked] = useState(false);
    const [telefone, setTelefone] = useState("");
    let aux

    const handleChange = nextChecked => {
        setChecked(nextChecked);
        { checked ? aux = 2 : aux = 1 }
        setRoleId(aux)
    };

    async function loadUser() {
        let url = window.location.href.split('/')
        let matricula = (url[url.length - 1])

        await api.get(`/user/showid/${matricula}`).then((res) => {
            setUser(res.data)
            setDataNasc(format(new Date(res.data.dataNasc), 'yyyy-MM-dd'))
            setDataAdmissao(format(new Date(res.data.dataAdmissao), 'yyyy-MM-dd'))
            setCep(res.data.cep)
            setRua(res.data.rua)
            setCidade(res.data.cidade)
            setEstado(res.data.estado)
            setTelefone(res.data.telefone)
            aux = res.data.roleId
            if (aux === 1) {
                setChecked(true)
            }
        })
    }

    async function deleteUser(msg) {
        document.querySelector("#msg").setAttribute("style", "display: flex")
        if (msg === "sim") {
            await api.delete(`/user/delete/${user.matricula}`)
                .then(
                    alert("O usuário foi deletado"),
                    window.location.replace('/users')
                ).catch(err => {
                    console.log(err)
                }
                )
        } else if (msg === "não") {
            document.querySelector("#msg").setAttribute("style", "display: none")
        }

    }

    function editUser() {
        let content = document.getElementsByName("content")
        for (var i = 0; i < content.length; i++) {
            content[i].removeAttribute("disabled");
            document.getElementById("edit").setAttribute("style", "display: none")
            document.getElementById("save").setAttribute("style", "display: flex, alignItems: center")
        }
    }

    async function saveUser() {

        await api.put(`/user/update/${user.matricula}`, {
            matricula, roleId, funcao, nome, email, telefone,
            dataNasc: `${dataNasc}T16:08:08.061Z`,
            dataAdmissao: `${dataAdmissao}T16:08:08.061Z`,
            cep, numero, rua, complemento, cidade, estado
        }).then(() => {
            let content = document.getElementsByName("content")
            for (var i = 0; i < content.length; i++) {
                content[i].setAttribute("disabled", true);
                document.getElementById("save").setAttribute("style", "display: none")
                document.getElementById("edit").setAttribute("style", "display: flex, alignItems: center")
            }
        }).catch(err => {
            console.log(err)
        })
    }
    function BuscarCep(valor) {
        if (valor && valor.length === 9) {
            BuscaCep(valor, { timeout: 5000, providers: ['brasilapi'] })
                .then((res) => {
                    if (valor === cep) {
                        setRua(res.street)
                        setCidade(res.city)
                        setEstado(res.state)
                        document.getElementById("rua").setAttribute("value", res.street)
                        document.getElementById("cidade").setAttribute("value", res.city)
                        document.getElementById("estado").setAttribute("value", res.state)
                    }
                }).catch(err => {
                    setMsgErrorCep("CEP não encontrado")
                })
        }
    }


    useEffect(() => {
        loadUser();
    }, [])

    return (
        <div>
            <S.Msg id="msg">
                <span>
                    <h4>Tem certeza que deseja remover esse usuario?</h4>
                    <button id="res" onClick={() => deleteUser("sim")} value={"sim"}>Sim</button>
                    <button id="res" onClick={() => deleteUser("não")} value={"não"}>Não</button>
                </span>
            </S.Msg>
            <SideMenu />
            <S.Container id="page">
                <S.Header>
                    <S.Title>Dados do Usuário</S.Title>
                    <div id="buttons">
                        <S.Button id="save" onClick={saveUser} style={{ display: "none" }}>SALVAR</S.Button>
                        <S.Button id="edit" onClick={editUser}>EDITAR</S.Button>
                        <S.Button onClick={() => deleteUser("")}>DELETAR</S.Button>
                    </div>
                </S.Header>
                <hr />
                <S.Content>
                    <div id="user">
                        <label for="admin">Administrador:
                            <Switch id="admin" name="content" disabled={true}
                                checked={checked} onChange={handleChange}
                                onColor={'#8A2BE2'} height={20} width={50}
                            />
                        </label>
                        <label>Matrícula:
                    <input name="content" disabled={true} defaultValue={user.matricula} onChange={e => matricula = (e.target.value)} /> </label>
                        <label>Função:
                    <input name="content" disabled={true} defaultValue={user.funcao} onChange={e => funcao = (e.target.value)} /> </label>
                        <label>Nome:
                    <input name="content" disabled={true} defaultValue={user.nome} onChange={e => nome = (e.target.value)} /> </label>
                        <label>Data de Admissão:
                    <input name="content" disabled={true} defaultValue={dataAdmissao} type="date" onChange={e => setDataAdmissao(e.target.value)} /> </label>
                        <label>Email:
                    <input name="content" disabled={true} defaultValue={user.email} onChange={e => email = (e.target.value)} /> </label>
                        <label>Telefone:
                    <Telefone disabled={true} mask="(99) 99999 9999" value={telefone} name="content" onChange={e => setTelefone(e.target.value)} /> </label>

                        <label>Data de Nascimento:
                    <input name="content" disabled={true} defaultValue={dataNasc} type="date" onChange={e => setDataNasc(e.target.value)} /> </label>


                    </div>
                    <br />
                    <h2>Endereço</h2>
                    {!msgErrorCep ? null : <div id="msgErrorCep"> <p>{msgErrorCep}</p></div>}
                    <div id="address">
                        <label>CEP:
                        <Cep id="cep" disabled={true} name="content" value={cep} onChange={BuscarCep(cep), (cep) => setCep(cep)} /></label>
                        <label>Número:
                    <input name="content" disabled={true} defaultValue={user.numero} onChange={e => numero = (e.target.value)} /> </label>
                        <label>Rua:
                    <input name="content" id="rua" disabled={true} defaultValue={user.rua} onChange={e => setRua(e.target.value)} /> </label>
                        <label>Complemento:
                    <input name="content" disabled={true} defaultValue={user.complemento} onChange={e => complemento = (e.target.value)} /> </label>
                        <label>Cidade:
                    <input name="content" id="cidade" disabled={true} defaultValue={user.cidade} onChange={e => setCidade(e.target.value)} /> </label>
                        <label>Estado:
                    <input name="content" id="estado" disabled={true} defaultValue={user.estado} onChange={e => setEstado(e.target.value)} /> </label>
                    </div>
                </S.Content>
            </S.Container>
        </div>
    )
}
export default User;