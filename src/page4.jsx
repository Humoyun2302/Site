import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";


const Section = styled.section`
    background: #0e182c;
    height: 1400px;
`

const BG = styled.div`
    background: url(https://www.bugatti.com/fileadmin/_processed_/sei/p581/se-image-ac4faf7f057feb916f4e8e9a718e4a56.webp);
    width: 100%;
    height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Title = styled.h1`
    color: white;
    font-size: 60px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding-top: 50px;
`

const Text = styled.p`
    color: #bebebe;
`

const Bolide = () => {
    return (
        <Section>
            <Navbar />
            <BG>
                <Title>BUGATTI BOLIDE</Title>
            </BG>

            <img style={{ width: 400, margin: 100, marginRight: 150 }} src="https://www.bugatti.com/typo3conf/ext/bugatti_sitepackage/Resources/Public/Images/BXX/bolide.svg" alt="" />

            <Text>
                <p>1) Fuel consumption, l/100km: Technical concept, not subject to Directive 1999/94/EC.</p>
                <p>2) Using 110 octane racing fuel; Engine output with 98 octane fuel at 1,600 PS.</p>
                <p>3) The weight specification is based on the theoretically possible dry weight.</p>
                <p>4) Based on simulations.</p>
            </Text>
        </Section>

    )
}

export default Bolide