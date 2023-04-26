import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { SurveyData } from "./constants";

const Container = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(211, 216, 224, 0.5);
  background: #ffffff;
`;
const HeadLine = styled("h1")`
  color: #52575c;
`;
const ChartContainer = styled(Chart)`
  margin-top: 1rem;
`;

const HospitalSorvey = () => {
  return (
    <Container>
      <HeadLine>Bugati History</HeadLine>
      <ChartContainer
        options={SurveyData.options}
        series={SurveyData.series}
        type="area"
        height={250}
      />
    </Container>
  );
};

export default HospitalSorvey;
