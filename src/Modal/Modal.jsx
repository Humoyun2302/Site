import styled from "styled-components";
import { Modal, ModalBody } from "reactstrap";
import { X } from "react-feather";
import "./Modal.css";
import ModalMap from "./ModalMap";
import { map } from "leaflet";

const Container = styled("div")``;

const BuyModal = styled(Modal)`
  z-index: 999;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  top: 26px;
`;

const ModalHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const Section = styled("div")`
  display: flex;
  padding: 10;
`;

const Left = styled("div")``;
const Right = styled("div")`
  padding: 10px;
`;

const BrandImage = styled("img")`
  height: 400px;
  width: 550px;
  object-fit: cover;
`;

const Payment = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ModalForm = ({ toggle, modal, data }) => {
  console.log(data);
  return (
    <Container>
      <BuyModal isOpen={modal} toggle={toggle} size="xl">
        <ModalBody>
          <ModalHeader>
            <h4>Buy this Car</h4>
            <button
              onClick={toggle}
              style={{ backgroundColor: "white", border: "none" }}
            >
              <X size={28} />
            </button>
          </ModalHeader>
          <Section>
            <Left>
              <BrandImage src={data.img} alt="" />
            </Left>
            <Right>
              <div>
                <h3 style={{ fontSize: "30px" }}>{data.name}</h3>
                <p style={{ fontSize: "20px" }}>{data.price} $</p>
                <p>{data.text}</p>
              </div>
            </Right>
          </Section>
          <Payment>
            <form class="credit-card">
              <div class="form-header">
                <h4 class="title">Credit card detail</h4>
              </div>

              <div class="form-body">
                <input
                  type="text"
                  class="card-number"
                  placeholder="Card Number"
                />

                <div class="date-field">
                  <div class="month">
                    <select name="Month">
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>
                    </select>
                  </div>
                  <div class="year">
                    <select name="Year">
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>
                  </div>
                </div>

                <div class="card-verification">
                  <div class="cvv-input">
                    <input type="text" placeholder="CVV" />
                  </div>
                  <div class="cvv-details">
                    <p>
                      3 or 4 digits usually found <br /> on the signature strip
                    </p>
                  </div>
                </div>

                <button type="submit" class="proceed-btn">
                  <a href="#">Proceed</a>
                </button>
                <button type="submit" class="paypal-btn">
                  <a href="#">Pay With</a>
                </button>
              </div>
            </form>
          </Payment>
          <ModalMap />
        </ModalBody>
      </BuyModal>
    </Container>
  );
};
export default ModalForm;
