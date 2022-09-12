import axios from 'axios';
import logo from '../logo/MyWallet.png';
import styled from 'styled-components';
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import ContextUsuario from "../Contexts/Context";


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {setToken} = useContext(ContextUsuario);
    const navigate = useNavigate();


    async function autorizaUsuario(e) {
        e.preventDefault();
        const dadosUsuario = { email, password };
        try {
            const { data } = await axios.post('http://localhost:5000/login', dadosUsuario);

            setToken(data);
            navigate('/extrato');
        } catch (error) {
            console.error('Deu erro ao fazer o login');
        }
    }


return (
    <ContainerLogin>
        <img src={logo}></img>
        <Formulario onSubmit={autorizaUsuario}>
            <Input type="email" placeholder="E-mail" name="email" onChange={e => setEmail(e.target.value)}required />
            <Input type="password" placeholder="Senha" name="password" onChange={e => setPassword(e.target.value)} required />
            <Button type="submit"> Entrar </Button>
        </Formulario>

        <LinkEstilo onClick={() => navigate('/cadastro')}>Primeira vez? Cadastre-se</LinkEstilo>
    </ContainerLogin>
)
    
}

const ContainerLogin = styled.div`
height: 100vh;
width: 100%;
background-color: #8C11BE;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 36px;
a:hover {
    cursor: pointer;
}
`
const Formulario = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 15px;
button:hover{
    cursor: pointer;
}
`
const Input = styled.input`
width: 326px;
height: 58px;
border: none;
border-radius: 5px;
padding: 0px 10px;
font-size: 20px;
font-weight: 400;
`
const Button = styled.button`
height: 46px;
width: 326px;
border: none;
border-radius: 5px;
background-color: #A328D6;
color: white;
font-size: 20px;
font-weight: 700;
`
const LinkEstilo = styled.a`
font-size: 15px;
font-weight: 700;
color: white;
`



export default Login;