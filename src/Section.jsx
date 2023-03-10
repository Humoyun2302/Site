import React from "react";
import styled from "styled-components";
import img from './imgs/banner.jpg'

const Container = styled("div")`
    width: 100%;
    height: 500px;
    display: flex;
`;

const Section = ()=> {
    return (
        <Container>

        <h1>WHAT COLOR IS YOUR BUGATTI?</h1>

        <img 
        width={1290}
        height={600}
        src={img}
         alt="" />
      </Container>
    );
    }
    
    export default Section;