import React from 'react';
import * as S from "./styles";
import user from "../../assets/user.png";
import users from "../../assets/users.png";
import money from "../../assets/money.png";
import jobs from "../../assets/jobs.png";
import imglogout from "../../assets/logout.png";
import { logout } from "../../service/auth";

function SideMenu() {
    return (
        <S.Container>
            <div id="menu1">
                <S.Account>
                    <a href="/building">
                        <img src={user} alt="Minha Conta" />
                        <label>Minha Conta</label>
                    </a>
                </S.Account>
                <S.Menu>
                    <div id="menu">
                        <a href="/users">
                            <img src={users} alt="Usuários" />
                            <label>Users</label>
                        </a>
                    </div>
                    <div id="menu">
                        <a href="/building">
                            <img src={money} alt="Holerite" />
                            <label>Holerite</label>
                        </a>
                    </div>
                    <div id="menu">
                        <a href="/building">
                            <img src={jobs} alt="Vagas" />
                            <label>Vagas</label>
                        </a>
                    </div>
                </S.Menu>
                <S.Logout>
                    <a onClick={logout}>
                        <img src={imglogout} alt="Sair" />
                        <label>Sair</label>
                    </a>
                </S.Logout>
            </div>
        </S.Container>
    )
}
export default SideMenu;