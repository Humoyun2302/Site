import React from "react";
import styled from "styled-components";
import { OverallStatistics } from "./constants";

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
const ACard = styled("div")`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 250px;
  height: 100px;
  border-radius: 6px;
  box-shadow: 0 2px 15px rgba(211, 216, 224, 0.5);
  color: #336cfb;
  background: #ffffff;
`;
const Info = styled("div")`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;
const InfoTitle = styled("h5")`
  color: #336cfb;
`;
const InfoNum = styled("h6")`
  font-size: 30px;
  color: #336cfb;
`;
const OverAll = () => {
  return (
    <Container>
      {OverallStatistics.map((data, index) => (
        <ACard key={index}>
          {data?.icon}
          <Info>
            <InfoTitle>{data?.name}</InfoTitle>
            <InfoNum>{data?.number}</InfoNum>
          </Info>
        </ACard>
      ))}
    </Container>
  );
};
export default OverAll;
