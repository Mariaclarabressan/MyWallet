import styled from 'styled-components';
import axios from 'axios';
import logo from '../logo/MyWallet.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Cadastro() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conferesenha, setconferesenha] = useState('');

    const navigate = useNavigate();

    async function CadastraUsuario(e) {
        e.preventDefault();
        const dadosUsuario = { name, email, password, conferesenha };
        try {
            await axios.post('http://localhost:5000/cadastro', dadosUsuario);

            navigate('/');
        } catch (error) {
            console.error('Deu erro ao cadastrar o usuario');
        }
    }



    return (
        <ContainerLogin>
            <img src={logo} />
            <Formulario onsubmit={CadastraUsuario}>
                <Input type='name' placeholder='Nome' name='name' onChange={e => setName(e.target.value)}  required />
                <Input type='email' placeholder='E-mail' name='email' onChange={e => setEmail(e.target.value)} required />
                <Input type='password' placeholder='Senha' name='password' onChange={e => setPassword(e.target.value)} required />
                <Input type='password' placeholder='Cofirme a senha' name='confirmasenha' onChange={e => setconferesenha(e.target.value)} required />
                <Button>Cadastrar</Button>
            </Formulario>
            <LinkEstilo onClick={() => navigate('/')}>Já tem conta? Entre agora!</LinkEstilo>
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
export default Cadastro;