import React from "react";
import Navbar from "./navbar";
import styled from "styled-components";


const section = styled("h1")`
   font-size: x-large;
`;

const Page = () => {
    return (

    <Container>
        
        <div>
            <Navbar />
            <section>
                <h1>19TH CENTURY</h1>
            </section>
        </div>


        </Container>    

    )
}

export default Page