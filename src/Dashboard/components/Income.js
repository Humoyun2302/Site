import styled from "styled-components";
import { Income } from "./constants";
import Chart from "react-apexcharts";

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 2rem;
`;
const ACard = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(211, 216, 224, 0.5);
  color: #336cfb;
  background-color: #ffffff;
  width: ${(props) => (props.width <= 1000 ? "100%" : "49%")};
`;

const HeadLine = styled("h1")`
  margin-left: 1rem;
  color: #336cfb;
`;

const ChartContainer = styled(Chart)`
  margin-top: 1rem;
  width: 100%;
  height: auto;
`;

const OverAll = () => {
  return (
    <Container>
      {Income.map((data, index) => (
        <ACard key={index} width={750}>
          <HeadLine>{data.headLine}</HeadLine>
          <ChartContainer
            options={data.options}
            series={data.series}
            type="line"
          />
        </ACard>
      ))}
    </Container>
  );
};
export default OverAll;
