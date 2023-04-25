import styled from "styled-components";
import OverAll from "./OverallStatistics";
import HospitalSorvey from "./Survey";
import IncomeDashboard from "./Income";
// import AppointmentActivity from "./AppointmentActivity";
// import TrafficChart from './Traffic'

const Container = styled("div")`
  margin-top: 2rem;
  padding: 2rem;
  > :nth-child(2) {
    margin-top: 2rem;
  }
`;
const Title = styled("p")`
  color: green;
  margin-bottom: 2rem;
  font-size: 4rem;
`;
const Dashboard = () => {
  return (
    <Container>
      <Title>Welome to Bugatti Statistics</Title>
      <OverAll />
      <HospitalSorvey />
      <IncomeDashboard />
      {/* <AppointmentActivity /> */}
      {/* <TrafficChart/> */}
    </Container>
  );
};
export default Dashboard;
