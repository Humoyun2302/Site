import React from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
// import { GrInstagram } from "react-icons/gr";

import Navbar from "./navbar";
import styled from "styled-components";

const Title = styled("h1")`
  font-size: 40px;
  color: #000000;
  font-family: "Gill Sans", sans-serif;
`;

const Section = styled.section`
  padding: 0 50px;
`;

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

const Contact = () => {
  return (
    <Section>
      <Navbar />
      <section>
        <Title>CONTACT</Title>
      </section>
      <Box>
        <Left>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            dignissimos iste suscipit harum corporis corrupti quasi nesciunt.
            Earum velit expedita, ab recusandae vero placeat asperiores eveniet
            explicabo quia voluptas. Repudiandae tempora tenetur placeat nobis
            cumque eos magnam, temporibus molestiae, qui officia architecto
            dolores aliquid odit ipsa alias vero expedita. Quis, animi
            consequuntur. Aut alias, ipsa deleniti pariatur, qui ab quidem earum
            illum accusantium ut id obcaecati voluptate eligendi. Labore tempora
            qui quaerat. Perferendis dignissimos voluptatibus inventore soluta
            aperiam quidem, voluptas natus laudantium velit ipsam excepturi quas
            laboriosam ducimus officia sint perspiciatis necessitatibus fuga
            nam! Amet suscipit minima nesciunt quibusdam quaerat!
          </p>
        </Left>
        <Right>
          <p>
            <AiFillMail /> bugatti
          </p>

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
    </Section>
  );
};

export default Contact;
