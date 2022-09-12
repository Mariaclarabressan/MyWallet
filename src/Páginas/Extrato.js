import styled from 'styled-components';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import ContextUsuario from "../Contexts/Context";


export default function Extrato() {

    const { token } = useContext(ContextUsuario);

    const [transacoes, setTransacoes] = useEffect([]);

    useEffect(() => {
        async function transacoesDisponiveis() {
            try {
                const { data } = await axios.get('http://localhost:5000/transacoes')
                console.log(data);
                setTransacoes(data);
            } catch (error) {
                
                console.error(error.response);
            }
        }

        transacoesDisponiveis();
    }, []);

    function MostrarTransacoes() {
        return transacoes.map((t, index) => (
            
        ));
    }

    return (
        <ContainerExtrato>
            <Header>
                <h1>Olá {token.name}</h1>

            </Header>

        </ContainerExtrato>
    )
}


const ContainerExtrato = styled.div`
height: 100vh;
width: 100%;
background-color: #8C11BE;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 36px;
a:hover {
    cursor: pointer;
}
`
const Header = styled.div`
width: 100%;
padding: 0 24px;
margin-top: 25px;
background-color: #8C11BE;
display: flex;
justify-content: space-between;
align-items: center;
h1{
    color: white;
    font-weight: 700;
    font-size: 26px;
}
.logout-icon:hover {
    cursor: pointer;
}
`


