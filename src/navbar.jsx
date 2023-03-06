import React from "react"; 
import styled from "styled-components";

const Container = styled('div')`
width: 100%;
height: 30px;
background-color: #ffffff;
display: flex;
`
const Navbar = () =>{
return (
    <Container>
        <img  src="https://cdn.iconscout.com/icon/free/png-256/bugatti-283548.png" alt="" />
        <img style={{'width':"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="" />
    </Container>
)
}

export default Navbar
