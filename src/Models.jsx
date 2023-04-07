import React from "react";
import { Link } from "react-router-dom";
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
  color: black;
  text-decoration: none;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  padding-top: 70px;
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Models = () => {
  const data = [
    {
      link: "/mistral",
      img: "https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-30a994ce0ad359086d59a0c1e63918de.webp",
      title: "W16 MISTRAL",
    },
    {
      link: "/centodieci",
      img: "https://www.bugatti.com/fileadmin/_processed_/sei/p470/se-image-774c6c873ea28cd88a43bdd2c8f42cb5.webp",
      title: "W16 CENTODIECI",
    },
    {
      link: "/chiron",
      img: "https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-882c6c08377a7b8dd7d89f18109f88d1.webp",
      title: "W16 CHIRON",
    },
    {
      link: "/bolide",
      img: "https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-8ec8c25e8330988b2448490879a1863c.webp",
      title: "W16 BOLIDE",
    },
  ];
  return (
    <Container>
      {data.map((d) => (
        <Link to={d.link}>
          <Block>
            <Img src={d.img} alt="" />
            <h2>{d.title}</h2>
          </Block>
        </Link>
      ))}
    </Container>
  );
};

export default Models;
