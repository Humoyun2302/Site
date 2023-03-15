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

            <div>
            <img
            style={{marginRight:170}}
                width={500}
                height={500}
                src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-30a994ce0ad359086d59a0c1e63918de.webp"
                alt=""
            />
            
            <h2  style={{marginRight:180}}>W16 MISTRAL</h2>
            
            </div>
            

            <div>
            <img
                width={500}
                height={500}
                src="https://www.bugatti.com/fileadmin/_processed_/sei/p470/se-image-774c6c873ea28cd88a43bdd2c8f42cb5.webp"
                alt=""
            />
            <h2 style={{marginLeft:40}}>W16 CENTODIECI</h2>
            </div>

            <div>
            <img
                // style={{marginTop:650}}
                width={500}
                height={500}
                src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-882c6c08377a7b8dd7d89f18109f88d1.webp"
                alt=""
            />
            <h2 style={{}}>W16 CHIRON</h2>
            </div>
        
        </Container>

    );
}

export default Models;