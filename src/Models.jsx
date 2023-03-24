import React from "react";
import styled from "styled-components";


const Container = styled("div")`
   max-width: 1440px;
   width: 100%;
   margin-left: auto;
   margin-right: auto;
   padding-left: 10px;
   padding-right: 10px;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;

const Block = styled.div`
    margin: 0 40px;
    text-align: center;
`

const Img = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
`

const Models = () => {
    return (
        <Container>

            <Block>
                <Img

                    src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-30a994ce0ad359086d59a0c1e63918de.webp"
                    alt=""
                />

                <h2 >W16 MISTRAL</h2>

            </Block>


            <Block>
                <Img

                    src="https://www.bugatti.com/fileadmin/_processed_/sei/p470/se-image-774c6c873ea28cd88a43bdd2c8f42cb5.webp"
                    alt=""
                />
                <h2 >W16 CENTODIECI</h2>
            </Block>

            <Block>
                <Img

                    src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-882c6c08377a7b8dd7d89f18109f88d1.webp"
                    alt=""
                />
                <h2 >W16 CHIRON</h2>
            </Block>

            <Block>
                <Img

                    src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-8ec8c25e8330988b2448490879a1863c.webp"
                    alt=""
                />

                <h2 >W16 BOLIDE</h2>
            </Block>



        </Container>

    );
}

export default Models;