import React from 'react';
import * as S from "./styles";


function CardsHome() {

    return (
        <S.Container>
            <S.Card>
                <a href="/users">
                    <div id="header">
                        <S.Users />
                        <h2>Usuários</h2>
                    </div>
                    <S.Links>
                        <a href="/newuser">Cadastrar novos usuários</a>
                        <a  href="/users">Listar usuários cadastrados</a>
                    </S.Links>
                </a>
            </S.Card>
            <S.Card>
                <a href="/building">
                    <div id="header">
                        <S.Money />
                        <h2>Holerite</h2>
                    </div>
                    <S.Links>
                        <a>Ver o seu Holerite</a>
                        <a>Disparar Holerites</a>
                    </S.Links>
                </a>
            </S.Card>
            <S.Card>
                <a href="/building">
                    <div id="header">
                        <S.Jobs />
                        <h2>Vagas</h2>
                    </div>
                    <S.Links>
                        <a>Cadastrar novas Vagas</a>
                        <a>Listar as Vagas em Aberto</a>
                    </S.Links>
                </a>
            </S.Card>
        </S.Container>
    )
}
export default CardsHome;