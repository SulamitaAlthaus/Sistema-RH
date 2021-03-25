import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import { format } from 'date-fns'
import SideMenu from "../../components/sidemenu";
import CardsHome from "../../components/CardsHome";


function Home(props) {
    const user = props.location.state.detail.user
    const nome = user.nome.split(" ")
    const hour = (format(new Date, 'HH'))
    const [msgSaudacao, setMsgSaudacao] = useState("")
    const token = localStorage.getItem('@sistema-rh')

    function verificaToken(){
        if(!token){
            window.location.replace('/')
        }
    }

    function setMsg() {
        if (hour >= 0 && hour < 12) {
            setMsgSaudacao("Bom dia")
        } else if (hour >= 12 && hour < 18) {
            setMsgSaudacao("Boa Tarde")
        } else {
            setMsgSaudacao("Boa Noite")
        }
    }

    useEffect(() => {
        setMsg();
        verificaToken();

    })

    return (
        <div>
            <SideMenu />
            <S.Container>
                <S.Welcome>{msgSaudacao}, {nome[0]} </S.Welcome>
                <hr />
                <S.Card>
                    <h1>O que você deseja fazer?</h1>
                    <CardsHome />
                </S.Card>

            </S.Container>
        </div>
    )
}
export default Home;