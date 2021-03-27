import React, { useEffect, useState } from 'react';
import * as S from "./styles";
import api from "../../service/api"
import SideMenu from "../sidemenu"
import { format } from 'date-fns'


function User({matricula, funcao, nome, email, telefone, cep, numero, rua, complemento, cidade, estado}) {
    const [user, setUser] = useState({})
    const [dataNasc, setDataNasc] = useState("")
    const [dataAdmissao, setDataAdmissao] = useState("")

    async function loadUser() {
        let url = window.location.href.split('/')
        let matricula = (url[url.length - 1])

        await api.get(`/user/showid/${matricula}`).then((res) => {
            setUser(res.data)
            setDataNasc(format(new Date(res.data.dataNasc), 'dd/MM/yyyy'))
            setDataAdmissao(format(new Date(res.data.dataAdmissao), 'dd/MM/yyyy'))
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
        await api.put(`/user/update/${user.matricula}`,{
            matricula, funcao, nome, email, telefone, cep, numero, rua, complemento, cidade, estado
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
                        <label>Matrícula:
                    <input name="content" disabled={true} defaultValue={user.matricula} onChange={e => matricula = (e.target.value)} /> </label>
                        <label>Função:
                    <input name="content" disabled={true} defaultValue={user.funcao} onChange={e => funcao = (e.target.value)} /> </label>
                        <label>Nome:
                    <input name="content" disabled={true} defaultValue={user.nome} onChange={e => nome = (e.target.value)} /> </label>
                        <label>Data de Admissão:
                    <input name="content" disabled={true} defaultValue={dataAdmissao} onChange={e => setDataAdmissao(e.target.value)} /> </label>
                        <label>Email:
                    <input name="content" disabled={true} defaultValue={user.email} onChange={e => email = (e.target.value)} /> </label>
                        <label>Telefone:
                    <input name="content" disabled={true} defaultValue={user.telefone} onChange={e => telefone = (e.target.value)} /> </label>
                        <label>Data de Nascimento:
                    <input name="content" disabled={true} defaultValue={dataNasc} onChange={e => setDataNasc(e.target.value)} /> </label>

                    </div>
                    <br />
                    <h2>Endereço</h2>
                    <div id="address">
                        <label>CEP:
                    <input name="content" disabled={true} defaultValue={user.cep} onChange={e => cep = (e.target.value)} /> </label>
                        <label>Número:
                    <input name="content" disabled={true} defaultValue={user.numero} onChange={e => numero = (e.target.value)} /> </label>
                        <label>Rua:
                    <input name="content" disabled={true} defaultValue={user.rua} onChange={e => rua = (e.target.value)} /> </label>
                        <label>Complemento:
                    <input name="content" disabled={true} defaultValue={user.complemento} onChange={e => complemento = (e.target.value)} /> </label>
                        <label>Cidade:
                    <input name="content" disabled={true} defaultValue={user.cidade} onChange={e => cidade = (e.target.value)} /> </label>
                        <label>Estado:
                    <input name="content" disabled={true} defaultValue={user.estado} onChange={e => estado = (e.target.value)} /> </label>
                    </div>
                </S.Content>
            </S.Container>
        </div>
    )
}
export default User;