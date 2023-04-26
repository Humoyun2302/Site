import React from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import styled from "styled-components";

import Maps from "./Maps";

const Title = styled("h1")`
  text-align: left;
  padding-top: 70px;
  padding-left: 110px;
  font-size: 42px;
  color: #202020;
  font-family: "Gill Sans", sans-serif;
`;

const BG = styled.div`
  background: url(https://www.bugatti.com/fileadmin/_processed_/sei/p8/se-image-a86882eeff762b74a0f923109664380a.webp);
  width: 100%;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Section = styled.section``;

const Left = styled("div")`
  width: 45%;
  font-size: 20px;
  margin-top: 50px;
  font-family: "Gill Sans", sans-serif;

  &p {
    font-size: 22px;
    color: black;
    line-height: 1.5;
  }
`;

const Right = styled("div")`
  margin-top: 70px;
  width: 45%;
  & p {
    font-size: 23px;
    color: #000000;
    line-height: 1.5;
    & a {
      color: #000000;
    }
  }
`;

const Box = styled("div")`
  width: 100%;
  display: flex;
  gap: 3em;
  justify-content: space-around;
`;

const Order = styled.div`
  background: url(https://www.bugatti.com/fileadmin/_processed_/sei/p8/se-image-5a14df8b7706ab49a62155630f53c252.webp);
  width: 100%;
  height: 500px;
  margin: 4rem 0;
  padding: 0 60px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title2 = styled.h4`
  text-align: left;
  padding-top: 70px;
  font-size: 50px;
  color: #202020;
  font-family: "Gill Sans", sans-serif;
  margin-bottom: 50px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 2px solid black;
  font-size: 22px;
  transition: 0.5s;
  margin-top: 200px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: #fff;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px 15px;
  border: 1px solid black;
  margin-bottom: 15px;
`;

const BtnSubmit = styled.button`
  background: black;
  color: #fff;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  text-transform: uppercase;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <>
      <Section>
        <section>
          <BG>
            <Title>CONTACT</Title>
          </BG>
        </section>
        <Box>
          <Left>
            <Form action="">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input type="text" placeholder="Your Number" />
              <BtnSubmit type="submit">send</BtnSubmit>
            </Form>
          </Left>
          <Right>
            <p>
              <a href="tel:+998 99 666 99 66">
                <AiFillPhone />
                +998 99 666 99 66
              </a>
            </p>
            <p>
              <a href="tel:+998 99 777 77 77">
                <AiFillPhone /> +998 99 777 77 77
              </a>
            </p>
          </Right>
        </Box>
        <Order>
          <Title2>
            <p>YOUR CAREER AT</p>
            <p>BUGATTI</p>
          </Title2>
          <Button>Apply now</Button>
        </Order>
      </Section>
      <Maps />
    </>
  );
};

export default Contact;
