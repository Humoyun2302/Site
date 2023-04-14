import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footers = styled.footer`
  background: #000;
  padding: 25px 0;
  margin-top: 50px;
`;

const IconList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
  margin-bottom: 50px;
`;

const Icon = styled.a`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Text = styled.p`
  color: #fff;
  text-align: center;
  font-size: 19px;
`;

const icons = [
  {
    icon: <FaFacebookF />,
    linkl: "http://google.com",
  },
  {
    icon: <FaTwitter />,
    linkl: "http://google.com",
  },
  {
    icon: <FaInstagram />,
    linkl: "http://google.com",
  },
  {
    icon: <FaYoutube />,
    linkl: "http://google.com",
  },
  {
    icon: <FaLinkedin />,
    linkl: "http://google.com",
  },
];

const links = [
  {
    name: "CONTACT",
  },
  {
    name: "MEDIA",
  },
  {
    name: "LEGAL NOTICE",
  },
  {
    name: "UK MODERN SLAVERY ACT",
  },
  {
    name: "CODE OF CONDUCT",
  },
];

const Footer = () => {
  return (
    <Footers>
      <div>
        <IconList>
          {icons.map((item, index) => (
            <li key={index}>
              <Icon href={item.linkl}>{item.icon}</Icon>
            </li>
          ))}
        </IconList>
      </div>
      <div>
        <IconList>
          {links.map((item, index) => (
            <li key={index}>
              <Icon href={"#"}>{item.name}</Icon>
            </li>
          ))}
        </IconList>
      </div>
      <Text>© 2023 BUGATTI AUTOMOBILES S.A.S.</Text>
    </Footers>
  );
};

export default Footer;
