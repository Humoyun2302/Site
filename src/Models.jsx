import React from "react";
import styled from "styled-components";


const Container = styled("div")`
   display: flex;
   margin-top: 600px;
   margin-left: 50px;
`;

const Models = () => {
    return (
        <Container>

            <img
            style={{marginRight:70}}
                width={550}
                height={500}
                src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-30a994ce0ad359086d59a0c1e63918de.webp"
                alt=""
            />
            

            <img
                width={550}
                height={500}
                src="https://www.bugatti.com/fileadmin/_processed_/sei/p470/se-image-774c6c873ea28cd88a43bdd2c8f42cb5.webp"
                alt=""
            />


        </Container>

    );
}

export default Models;