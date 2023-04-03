import React from "react";
import Navbar from "./navbar";
import styled from "styled-components";

const Title = styled("h1")`
  font-size: 40px;
  color: #ffffff;
  font-family: "Gill Sans", sans-serif;
`;

const Section = styled.section`
  height: 1400px;
`;

const Contact = () => {
  return (
    <Section>
      <Navbar />
      <section>
        <Title>CONTACT</Title>
      </section>
    </Section>
  );
};

export default Contact;
