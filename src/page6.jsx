import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";

const BG = styled.div`
  background: url(https://d2o6sx2cv43e7k.cloudfront.net/assets/images/model-mistral-shoot-1.jpeg);
  width: 100%;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Section = styled.section``;

const Title = styled.h1`
  color: white;
  font-size: 60px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding-top: 50px;
`;

const Text = styled.p`
  color: #ffffff;
  width: 350px;
  font-size: larger;
  font-family: Arial, Helvetica, sans-serif;
`;

const Mistral = () => {
  return (
    <Section>
      <BG>
        <Title>BUGATTI MISTRAL</Title>

        <Text style={{ marginTop: 100 }}>
          Powerful.Elegant.A force of nature like no other. The Mistral is a
          one-of-a-kind wind that heralds the new seasons in southern France,
          stirring awe in all who experience it.
        </Text>

        <Text style={{ marginLeft: 910 }}>
          "The W16 MISTRAL embodies this and the spirit of BUGATTI, offering
          freedom, elegance, and speed with the incredible power of the iconic
          W16 engine. It’s time to become one with the elements."
        </Text>
      </BG>
    </Section>
  );
};

export default Mistral;
