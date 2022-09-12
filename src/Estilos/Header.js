import styled from 'styled-components';

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

export default Header;