import React from "react";
import Navbar from "./navbar";
import styled from "styled-components";


const Section = styled("section")`
`;

const Title = styled("h1")`
    font-size: 40px;
`

const Box = styled.div`
    display: flex;
    width: 100%;
    background-color: #f0ebeb;
    text-align: center;
    margin-bottom: 80px;
`
const Item = styled.div`
    width: 50%;
    text-align: center;


    & h1{
        padding-top: 100px;
        font-size: 34px;
    }
    & p{
        text-align: center;
        width: 550px;
        margin:  0 auto;
        font-size: 19px;
        color: #4e4e4e;

    }
`

const Img = styled.img`
    width: 100%;
`

const Page = () => {
    return (
        <Section>
            <Navbar />
            <section>
                <Title>19TH CENTURY</Title>
            </section>


            <Box>
                <Item>
                    <Img src="https://www.bugatti.com/fileadmin/_processed_/sei/p86/se-image-7095ff2b4b2ed2dd46c47287e2f2f0bb.webp" alt="" />
                </Item>

                <Item>
                    <Title >1856</Title>
                    <p>Carlo Bugatti (1856–1940) was an internationally renowned, award-winning artist, designer and silversmith. His furniture was especially famous. Influenced by Art Nouveau, it was characterized by its utterly individual form, often imposing dimensions and use of highly refined materials.</p>
                </Item>
            </Box>

            <Title><h1>20TH CENTURY</h1></Title>
            <Box>
                <Item>
                    <Img src="https://www.bugatti.com/fileadmin/_processed_/sei/p86/se-image-5d35b5ded9dc9d9ae1c19a25f675625a.webp" alt="" />
                </Item>

                <Item>
                    <h1 >1903</h1>
                    <p>The first race car designed by Bugatti was built in 1903. The chain-driven car was an upgraded version of the Gulinelli model, with a 12.9-litre displacement and a chassis with a tubular frame to circulate coolant.</p>
                </Item>
            </Box>

            <Title>21 CENTURY</Title>
            <Box>
                <Item>
                    <Img src="https://www.bugatti.com/fileadmin/_processed_/sei/p86/se-image-3e016054065b93ec2708f5f2d2943130.webp" alt="" />
                </Item>

                <Item>
                    <h1 >2008</h1>
                    <p>In the Veyron 16.4 Grand Sport, the Bugatti designers and engineers perfectly combined a 1,001 PS supercar with the lifestyle of open-top driving. The Grand Sport was unveiled at the Concours d’Elegance in Pebble Beach (USA) in August 2008, and was quick to find admirers. At an auction run by Gooding &amp; Company, chassis number one was sold for 3.2 million US dollars.</p>
                </Item>
            </Box>

        </Section>



    )
}

export default Page