import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import api from "../../service/api"
import SideMenu from "../sidemenu"


function ListUser() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const company = localStorage.getItem('@companyId');
    const filteredUser = users.filter(user => {
        return (user.nome.toLowerCase().includes(search.toLowerCase()))
        // if (typeof search === 'string') 
        // else {
        //     return user.matricula.includes(parseInt(search))}
        
    })

    async function loadUsers() {
        await api.get(`/user/show/${company}`)
            .then(response => {
                setUsers(response.data)
            }).catch(err => {
                console.log(err)
            })
    }

    function listUser(matricula) {
        window.location.replace(`user/${matricula}`)
    }

    function newUser() {
        window.location.replace(`newuser`)
    }

    useEffect(() => {
        loadUsers();
    }, [])


    return (
        <div>
            <SideMenu />
            <S.Container>
                <S.Header>
                    <S.Title>Usuários</S.Title>
                    <S.Search>
                        <input type="text" placeholder="Pesquise o usuário pelo nome"
                            onChange={e => setSearch(e.target.value)} />
                    </S.Search>
                    <S.Button onClick={newUser}>+ NOVO USUÁRIO</S.Button>
                </S.Header>
                <hr />
                <S.Users>
                    {filteredUser.map((item) =>
                        <S.Card onClick={() => listUser(item.matricula)}>
                            <S.Image />
                            <S.Right>
                                <h4>{item.nome}</h4>
                                <h4>Matrícula: {item.matricula}</h4>
                                <h4>{item.funcao}</h4>
                            </S.Right>
                        </S.Card>
                    )}
                </S.Users>
            </S.Container>
        </div>
    )
}
export default ListUser;