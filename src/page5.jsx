import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import ModalForm from "./Modal/Modal";
import { useState } from "react";

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

const data = [
  {
    img: "https://avatars.mds.yandex.net/i?id=cc108c47e405cf09ced35ab2e0fb9724-4034415-images-thumbs&n=13",
    name: "CENTODIECI",
    price: 210000,
    text: "The Bugatti is a high-performance sports car known for its exceptional speed, luxurious design, and advanced engineering. With its sleek and aerodynamic body, the Bugatti is a true masterpiece of automotive engineering. It boasts a powerful engine capable of producing incredible horsepower, allowing it to reach speeds that few other cars can match. The interior is equally impressive, featuring high-quality materials, state-of-the-art technology, and a range of comfort features that make driving a Bugatti a truly unforgettable experience. Whether you're a car enthusiast or simply appreciate the finer things in life, the Bugatti is a car that will take your breath away.",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=a092ea12e68a854ab2591ee90600d75762633243-8210460-images-thumbs&n=13",
    name: "CENTODIECI",
    price: 150000,
    text: "The Bugatti Centodieci is a limited edition hypercar that pays homage to the iconic Bugatti EB110 from the 1990s. With only ten models produced, the Centodieci is one of the rarest and most exclusive cars in the world. It boasts a sleek and aerodynamic design with sharp angles and an aggressive stance that exudes power and speed. The Centodieci is powered by an 8.0-liter quad-turbocharged W16 engine that produces an astonishing 1,600 horsepower, making it one of the most powerful cars on the road. Its top speed is electronically limited to 236 mph, but it can accelerate from 0 to 60 mph in just 2.4 seconds. The interior of the Centodieci is just as impressive, featuring high-quality materials, advanced technology, and a range of luxury amenities that make driving this hypercar a truly unforgettable experience.",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5c92eb5729d77762337436e8d87e12bd-5480917-images-thumbs&n=13",
    name: "CENTODIECI",
    price: 250000,
    text: "I apologize for my previous response which was incorrect. The Bugatti Centodieci is a brand new hypercar and not an old car. As for an old Bugatti model, I can provide information on the Bugatti Type 35. The Bugatti Type 35 is a vintage sports car produced by Bugatti from 1924 to 1930. It was designed by Ettore Bugatti and is widely regarded as one of the most successful racing cars of all time. The Type 35 is powered by a 2.0-liter inline-eight engine that produces around 90 horsepower. It was built for racing and has a lightweight body, advanced suspension, and excellent handling capabilities. The Type 35 dominated the Grand Prix circuit during the late 1920s and early 1930s, winning over 1,000 races and countless awards. Despite being almost a century old, the Bugatti Type 35 remains a sought-after vintage sports car today, prized for its beauty, speed, and historical significance.",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=937cbaa7d7d980aa571fb17c3669f70c-5233561-images-thumbs&n=13",
    name: "CENTODIECI",
    price: 170000,
    text: "Bugatti has recently unveiled its latest supercar, the 120 CENTODIECI, which is a stunning addition to the brand's already impressive lineup of high-performance vehicles. This new car boasts a sleek design that is sure to turn heads, and it features cutting-edge technology that makes it one of the most advanced cars on the road. With its powerful engine and top-of-the-line features, the 120 CENTODIECI is a true masterpiece of engineering and design, and it is sure to be coveted by car enthusiasts around the world.",
  },
];

const Centodieci = () => {
  const [datas, setDatas] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleClick = (d) => {
    setDatas(d);
    setModal(true);
  };

  return (
    <div>
      <Section>
        <BG>
          <Title>BUGATTI CENTODIECI</Title>
        </BG>

        <Container>
          {data.map((item, index) => (
            <div key={index}>
              <Block key={index} onClick={() => handleClick(item)}>
                <Img src={item.img} alt="" />
                <h2>{item.name}</h2>
              </Block>
            </div>
          ))}
          <ModalForm modal={modal} toggle={toggle} data={datas} />
        </Container>
      </Section>
    </div>
  );
};

export default Centodieci;
