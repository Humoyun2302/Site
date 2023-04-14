import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import Footer from "./Footer";

const Section = styled.section`
  /* padding: 0 50px; */
`;

const BG = styled.div`
  background: url(https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-d329c570ea6f5e77810bc0318eb4b788.webp);
  width: 100%;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  color: white;
  font-size: 60px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding-right: 700px;
  padding-top: 50px;
`;

const Container = styled("div")`
  max-width: 1440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
  padding-bottom: 500px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Block = styled.div`
  margin: 0 40px;
  text-align: center;

  & h2 {
    font-size: 24px;
    margin-top: 20px;
    font-family: "Gill Sans", sans-serif;
  }
`;

const Img = styled.img`
  width: 500px;
  height: 600px;
  object-fit: cover;
  padding-top: 70px;
  transition: 0.4s;
  &:hover {
    transform: scale(1.03);
  }
`;

const Chiron = () => {
  return (
    <Section>
      <BG>
        <Title>CHIRON MODELS</Title>
      </BG>
      <Container>
        <Block>
          <Img
            src="https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-2a7ae35b418017cc22e45025cf8693ab.webp"
            alt=""
          />

          <h2>CHIRON SUPER SPORT</h2>
        </Block>

        <Block>
          <Img
            src="https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-c9d00c8ae93bc4074d31107ad79e6823.webp"
            alt=""
          />
          <h2>CHIRON PUR SPORT</h2>
        </Block>

        <Block>
          <Img
            src="https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-82b2449917fb9b170195e48aa533b252.webp"
            alt=""
          />
          <h2>SHIRON SPORT</h2>
        </Block>

        <Block>
          <Img
            src="https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-c0102a8671eca07fea7e40059afc4083.webp"
            alt=""
          />

          <h2>CHIRON</h2>
        </Block>
      </Container>
    </Section>
  );
};

export default Chiron;
