import React from "react";
import styled from "styled-components";
import img from './imgs/banner.jpg'
import Models from "./Models";

const Container = styled("div")`
    width: 100%;
    height: 700px;
    background: url(${img});
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: x-large;
    color: white;
`;

const Section = ()=> {
    return (
        <Container>

        <div>
            <h1>WHAT COLOR IS YOUR BUGATTI?</h1>
            THE ULTIMATE ROADSTER, INSPIRED BY A LEGENDARY WIND.
        </div>
        
        <Models/>
      </Container>
    );
    }
    
    export default Section;