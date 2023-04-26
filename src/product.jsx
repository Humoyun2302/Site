import React, { useState } from "react";
import Navbar from "./navbar";
import styled from "styled-components";
import Footer from "./Footer";
import ModalForm from "./Modal/Modal";

const BG = styled.div`
  background: url(https://gtspirit.com/wp-content/uploads/2021/06/Bugatti-Legends-e1623270582862.jpg);
  width: 100%;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled("h1")`
  font-size: 50px;
  color: #000000c5;
  font-family: "Gill Sans", sans-serif;
`;

const Section = styled.section`
  height: 1800px;
`;

const Container = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Block = styled.div`
  margin: 0 40px;
  text-align: center;
  font-size: x-large;
  font-family: "Gill Sans", sans-serif;
`;

const Img = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
  padding-top: 70px;
  transition: 0.4s;
  &:hover {
    transform: scale(1.07);
  }
`;

const d = [
  {
    img: "https://s0.rbk.ru/v6_top_pics/media/img/4/45/756215218826454.jpg",
    name: "BUGATTI VEYRON",
    years: "2005-2015",
    price: 210000,
    text: "The Bugatti Veyron is a supercar produced by the French automaker Bugatti. When it was first introduced in 2005, it was considered the most powerful and fastest production car in the world, with a top speed of 253 miles per hour. The Veyron is powered by an 8.0-liter quad-turbocharged W16 engine that produces a staggering 1,001 horsepower, allowing it to accelerate from 0 to 60 miles per hour in just 2.5 seconds. Its sleek and aerodynamic design was a major factor in achieving such high speeds, and the car is also equipped with advanced features such as an adaptive suspension system, all-wheel drive, and active aerodynamics. The Veyron was produced in limited numbers, with only 450 units ever made, making it one of the rarest and most exclusive supercars in the world. Despite being succeeded by newer models such as the Chiron, the Bugatti Veyron remains an icon of automotive engineering and design.",
  },
  {
    img: "https://images.drive.ru/i/0/56d553ffec05c4e543000407",
    name: "BUGATTI CHIRON",
    years: "2015-present",
    price: 170000,
    text: "The Bugatti Chiron is a high-performance sports car produced by the legendary French automaker Bugatti. This stunning vehicle boasts a sleek and aerodynamic design that is both beautiful and functional, and it is powered by an 8.0-liter quad-turbocharged W16 engine that produces a staggering 1,479 horsepower. This allows the Chiron to accelerate from 0 to 60 miles per hour in just 2.4 seconds and reach top speeds of up to 261 miles per hour. The car is also equipped with advanced technology and features such as an adaptive suspension system, active aerodynamics, and a luxurious interior that is both comfortable and elegant. With its combination of speed, power, and luxury, the Bugatti Chiron is widely regarded as one of the most impressive sports cars ever produced",
  },
  {
    img: "https://all-auto.org/wp-content/uploads/2020/04/Bugatti-Divo-6-800x500.jpg",
    name: "BUGATTI DIVO",
    years: "2019-2021",
    price: 250000,
    text: "The Bugatti Divo is a limited-edition hypercar produced by the legendary French automaker Bugatti. This high-performance vehicle is based on the Bugatti Chiron, but it has been extensively modified to provide even more power, speed, and agility. The Divo is powered by an 8.0-liter quad-turbocharged W16 engine that produces a staggering 1,479 horsepower, allowing it to reach speeds of up to 236 miles per hour. The car's aerodynamic design and advanced suspension system make it incredibly agile and responsive, allowing it to handle even the most challenging driving conditions with ease. With only 40 units ever produced, the Bugatti Divo is one of the rarest and most exclusive hypercars in the world.",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/bugatti-centodieci-1565813005.jpg?crop=0.795xw:0.527xh;0.145xw,0.473xh&resize=1200:*",
    name: "BUGATTI CENTODIECI",
    years: "2020-present",
    price: 220000,
    text: "The Centodieci continues Bugatti’s successful 110-year course of exceptional design and performance, while reviving the memory of the brand’s recent history. With the Centodieci – Italian for 110 – Bugatti created a reinterpretation of the epochal EB110, which, when presented in 1991, was considered the fastest and most extraordinary supercar of its time. The EB110, built by Romano Artioli in Italy, was an important intermediate step for the refoundation of Bugatti in 1998 and for the return to the French roots in Molsheim.",
  },
  {
    img: "https://www.bugatti.com/fileadmin/_processed_/d/a/csm_Desktop_Stage_v4_075c72c979.png",
    name: "BUGATTI BOLIDE",
    years: "2021-present",
    price: 230000,
    text: "The answer: the BUGATTI Bolide An uncompromising experiment, a thoroughbred, a Pur Sang that, in its brute exclusivity, impresses above all with high performance, low weight and a driving experience in a new dimension. Driving the Bolide is like riding on a cannonball. With the experimental study of the BUGATTI Bolide, the French luxury car manufacturer is presenting a new and unique vehicle concept for the ultimate BUGATTI performance kick: a track-only hyper sports car featuring the W16 engine derived from series production combined with a minimal body for maximum downforce. The Bolide offers an unprecedented and ultimate BUGATTI driving experience: reduced, raw, authentic.",
  },
  {
    img: "https://www.topgear.com/sites/default/files/2023/02/07%20BUGATTI_W16-Mistral_France.jpg",
    name: "BUGATTI MISTRAL",
    years: "2022-present",
    price: 170000,
    text: "Bugatti Mistral is the last of its kind, the last Bugatti of the Veyron and Chiron blood line. Bugatti will produce no more than 99 examples of the spyder. powered with the 16-cylinder engine developed in the Ferdinand Piëch Volkswagen Era.",
  },
];

const Product = () => {
  const [datas, setDatas] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleClick = (d) => {
    setDatas(d);
    setModal(true);
  };
  return (
    <Section>
      <section>
        <BG>
          <Title>PRODUCT</Title>
        </BG>
      </section>

      <Container>
        {d.map((item, index) => (
          <div key={index}>
            <Block onClick={() => handleClick(item)}>
              <Img src={item.img} alt="" />
              <p>{item.name}</p>
              <p>{item.years}</p>
            </Block>
          </div>
        ))}
        <ModalForm modal={modal} toggle={toggle} data={datas} />
      </Container>
    </Section>
  );
};

export default Product;
