import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";

const BG = styled.div`
  background: url(https://www.bugatti.com/fileadmin/_processed_/sei/p387/se-image-3c925a410b2f7f0f0b6fa014688b56c6.webp);
  width: 100%;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Section = styled.section`
  height: 1600px;
`;

const Title = styled.h1`
  color: #959595;
  font-size: 60px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding-top: 50px;
`;

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
  & h2 {
    font-size: 24px;
    margin-top: 20px;
    font-family: "Gill Sans", sans-serif;
  }
`;

const Img = styled.img`
  width: 450px;
  height: 450px;
  object-fit: cover;
  padding-top: 70px;
  transition: 0.4s;
  &:hover {
    transform: scale(1.04);
  }
`;

const Centodieci = () => {
  return (
    <div>
      <Section>
        <BG>
          <Title>BUGATTI CENTODIECI</Title>
        </BG>

        <Container>
          <Block>
            <Img
              src="https://avatars.mds.yandex.net/i?id=cc108c47e405cf09ced35ab2e0fb9724-4034415-images-thumbs&n=13"
              alt=""
            />

            <h2>CENTODIECI</h2>
          </Block>

          <Block>
            <Img
              src="https://avatars.mds.yandex.net/i?id=a092ea12e68a854ab2591ee90600d75762633243-8210460-images-thumbs&n=13"
              alt=""
            />
            <h2>CENTODIECI</h2>
          </Block>

          <Block>
            <Img
              src="https://avatars.mds.yandex.net/i?id=5c92eb5729d77762337436e8d87e12bd-5480917-images-thumbs&n=13"
              alt=""
            />
            <h2>CENTODIECI</h2>
          </Block>

          <Block>
            <Img
              src="https://avatars.mds.yandex.net/i?id=937cbaa7d7d980aa571fb17c3669f70c-5233561-images-thumbs&n=13"
              alt=""
            />
            <h2>CENTODIECI</h2>
          </Block>
        </Container>
      </Section>
    </div>
  );
};

export default Centodieci;
