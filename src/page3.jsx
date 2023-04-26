import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import Footer from "./Footer";
import ModalForm from "./Modal/Modal";

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

const d = [
  {
    img: "https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-2a7ae35b418017cc22e45025cf8693ab.webp",
    name: "CHIRON SUPER SPORT",
    price: 210000,
    text: "The Bugatti is a high-performance sports car known for its exceptional speed, luxurious design, and advanced engineering. With its sleek and aerodynamic body, the Bugatti is a true masterpiece of automotive engineering. It boasts a powerful engine capable of producing incredible horsepower, allowing it to reach speeds that few other cars can match. The interior is equally impressive, featuring high-quality materials, state-of-the-art technology, and a range of comfort features that make driving a Bugatti a truly unforgettable experience. Whether you're a car enthusiast or simply appreciate the finer things in life, the Bugatti is a car that will take your breath away.",
  },
  {
    img: "https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-c9d00c8ae93bc4074d31107ad79e6823.webp",
    name: "CHIRON PUR SPORT",
    price: 210000,
    text: "The Bugatti is a high-performance sports car known for its exceptional speed, luxurious design, and advanced engineering. With its sleek and aerodynamic body, the Bugatti is a true masterpiece of automotive engineering. It boasts a powerful engine capable of producing incredible horsepower, allowing it to reach speeds that few other cars can match. The interior is equally impressive, featuring high-quality materials, state-of-the-art technology, and a range of comfort features that make driving a Bugatti a truly unforgettable experience. Whether you're a car enthusiast or simply appreciate the finer things in life, the Bugatti is a car that will take your breath away.",
  },
  {
    img: "https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-82b2449917fb9b170195e48aa533b252.webp",
    name: "SHIRON SPORT",
    price: 210000,
    text: "The Bugatti is a high-performance sports car known for its exceptional speed, luxurious design, and advanced engineering. With its sleek and aerodynamic body, the Bugatti is a true masterpiece of automotive engineering. It boasts a powerful engine capable of producing incredible horsepower, allowing it to reach speeds that few other cars can match. The interior is equally impressive, featuring high-quality materials, state-of-the-art technology, and a range of comfort features that make driving a Bugatti a truly unforgettable experience. Whether you're a car enthusiast or simply appreciate the finer things in life, the Bugatti is a car that will take your breath away.",
  },
  {
    img: "https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-82b2449917fb9b170195e48aa533b252.webp",
    name: "SHIRON SPORT",
    price: 210000,
    text: "The Bugatti is a high-performance sports car known for its exceptional speed, luxurious design, and advanced engineering. With its sleek and aerodynamic body, the Bugatti is a true masterpiece of automotive engineering. It boasts a powerful engine capable of producing incredible horsepower, allowing it to reach speeds that few other cars can match. The interior is equally impressive, featuring high-quality materials, state-of-the-art technology, and a range of comfort features that make driving a Bugatti a truly unforgettable experience. Whether you're a car enthusiast or simply appreciate the finer things in life, the Bugatti is a car that will take your breath away.",
  },
  {
    img: "https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-c0102a8671eca07fea7e40059afc4083.webp",
    name: "CHIRON",
    price: 210000,
    text: "The Bugatti is a high-performance sports car known for its exceptional speed, luxurious design, and advanced engineering. With its sleek and aerodynamic body, the Bugatti is a true masterpiece of automotive engineering. It boasts a powerful engine capable of producing incredible horsepower, allowing it to reach speeds that few other cars can match. The interior is equally impressive, featuring high-quality materials, state-of-the-art technology, and a range of comfort features that make driving a Bugatti a truly unforgettable experience. Whether you're a car enthusiast or simply appreciate the finer things in life, the Bugatti is a car that will take your breath away.",
  },
];

const Chiron = () => {
  const [datas, setDatas] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleClick = (d) => {
    setDatas(d);
    setModal(true);
  };
  return (
    <Section>
      <BG>
        <Title>CHIRON MODELS</Title>
      </BG>
      <Container>
        {d.map((item, index) => (
          <Block key={index} onClick={() => handleClick(item)}>
            <Img src={item.img} alt="" />
            <h2>{item.name}</h2>
          </Block>
        ))}
        <ModalForm modal={modal} toggle={toggle} data={datas} />
      </Container>
    </Section>
  );
};

export default Chiron;
