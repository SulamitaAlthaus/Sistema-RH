import React from 'react';
import * as S from "./styles";


function CardsHome() {

    return (
        <S.Container>
            <S.Card>
                <div id="header">
                    <S.Users />
                    <h2>Usuários</h2>
                </div>
                <S.Links>
                    <a>Cadastrar novos usuários</a>
                    <a>Listar usuários cadastrados</a>
                    <a>Editar usuários cadastrados</a>
                </S.Links>
            </S.Card>
            <S.Card>
                <div id="header">
                    <S.Money />
                    <h2>Holerite</h2>
                </div>
                <S.Links>
                    <a>Ver o seu Holerite</a>
                    <a>Disparar Holerites</a>
                </S.Links>
            </S.Card>
            <S.Card>
                <div id="header">
                    <S.Jobs />
                    <h2>Vagas</h2>
                </div>
                <S.Links>
                    <a>Cadastrar novas Vagas</a>
                    <a>Listar as Vagas em Aberto</a>
                </S.Links>
            </S.Card>
        </S.Container>
    )
}
export default CardsHome;