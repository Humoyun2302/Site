import React from "react";
import Navbar from "./navbar";
import styled from "styled-components";
import Footer from "./Footer";

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

const Product = () => {
  return (
    <Section>
      <section>
        <BG>
          <Title>PRODUCT</Title>
        </BG>
      </section>

      <Container>
        <Block>
          <Img
            src="https://s0.rbk.ru/v6_top_pics/media/img/4/45/756215218826454.jpg"
            alt=""
          />

          <p>BUGATTI VEYRON</p>
          <p>2005-2015</p>
        </Block>

        <Block>
          <Img
            src="https://images.drive.ru/i/0/56d553ffec05c4e543000407"
            alt=""
          />
          <p>BUGATTI CHIRON</p>
          <p>2015-present</p>
        </Block>

        <Block>
          <Img
            src="https://all-auto.org/wp-content/uploads/2020/04/Bugatti-Divo-6-800x500.jpg"
            alt=""
          />
          <p>BUGATTI DIVO</p>
          <p>2019-2021</p>
        </Block>

        <Block>
          <Img
            src="https://hips.hearstapps.com/hmg-prod/images/bugatti-centodieci-1565813005.jpg?crop=0.795xw:0.527xh;0.145xw,0.473xh&resize=1200:*"
            alt=""
          />
          <p>BUGATTI CENTODIECI</p>
          <p>2020-present</p>
        </Block>

        <Block>
          <Img
            src="https://www.bugatti.com/fileadmin/_processed_/d/a/csm_Desktop_Stage_v4_075c72c979.png"
            alt=""
          />
          <p>BUGATTI BOLIDE</p>
          <p>2021-present</p>
        </Block>

        <Block>
          <Img
            src="https://www.topgear.com/sites/default/files/2023/02/07%20BUGATTI_W16-Mistral_France.jpg"
            alt=""
          />
          <p>BUGATTI MISTRAL</p>
          <p>2022-present</p>
        </Block>
      </Container>
    </Section>
  );
};

export default Product;
