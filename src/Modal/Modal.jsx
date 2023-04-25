import styled from "styled-components";
import { Modal, ModalBody } from "reactstrap";
import { X } from "react-feather";
const Container = styled("div")``;

const BuyModal = styled(Modal)`
  z-index: 999;
  max-width: 909px;
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
`;

const Payment = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ModalForm = ({ toggle, modal, data }) => {
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
              <BrandImage src="https://images.unsplash.com/photo-1627454820903-9646d6ca61f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVnYXR0aXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </Left>
            <Right>
              <div>
                <h3 style={{ fontSize: "30px" }}>Bugatti</h3>
                <p style={{ fontSize: "20px" }}>$50000</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  quo rerum fuga nisi consequuntur necessitatibus numquam, illum
                  commodi quam magnam maiores iste officiis molestiae
                  perferendis officia tenetur amet ipsam. Numquam.
                </p>
              </div>
            </Right>
          </Section>
          <Payment>
            <label htmlFor="card-number">Enter the Card number:</label>
            <input
              type="text"
              id="card-number"
              style={{
                borderRadius: "8px",
                border: "2px solid #15c69a",
                fontSize: "24px",
              }}
            />
            <div
              style={{ display: "flex", margin: "10px", alignItems: "center" }}
            >
              <label htmlFor="card-number">Expiration date:</label>
              <input
                type="text"
                style={{
                  margin: "0px 10px",
                  fontSize: "20px",
                  borderRadius: "8px",
                  border: "2px solid #15c69a",
                }}
              />
              <label htmlFor="card-number">CVV:</label>
              <input
                type="text"
                style={{
                  margin: "0px 10px",
                  fontSize: "20px",
                  borderRadius: "8px",
                  border: "2px solid #15c69a",
                }}
              />
            </div>
            <button
              style={{
                fontSize: "26px",
                color: "white",
                borderRadius: "8px",
                backgroundColor: "#15c69a",
                border: "none",
              }}
            >
              Pay!
            </button>
          </Payment>
        </ModalBody>
      </BuyModal>
    </Container>
  );
};
export default ModalForm;
