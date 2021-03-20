import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import api from "../../service/api";
import { login } from "../../service/auth";

import * as S from "./styles";

class Login extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    };

    handleSignIn = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
            try {
                const response = await api.post("/login", { email, password });
                login(response.data.token);
                this.props.history.push({
                    pathname: '../Home',
                    state: { detail: response.data }
                });
            } catch (err) {
                this.setState({
                    error:
                        "Houve um problema com o login, verifique suas credenciais."
                });
            }
        }
    };

    render() {
        return (
            <S.Container>
                <S.Left>
                    <S.Slogan>
                        <S.Text>
                            Lorem ipsum dolor sit.
                        </S.Text>
                    </S.Slogan>
                </S.Left>
                <S.Form onSubmit={this.handleSignIn}>
                    <S.Image/>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="email"
                        id="email"
                        placeholder="Email ou Matricula"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit">ENTRAR</button>
                    <h3>Ou <a href="/register">Registre-se</a> </h3>
                </S.Form>
            </S.Container>
        );
    }
}

export default withRouter(Login);