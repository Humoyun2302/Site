import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const List = styled("ul")`
  display: flex;
  list-style: none;
  gap: 2em;
`;

const Links = styled("a")`
  text-decoration: none;
  color: black;
`;

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Product",
    link: "/product",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <>
      <Container>
        <Link to="/">
          <img
            style={{ marginLeft: "100px" }}
            width={180}
            height={100}
            src="https://1000logos.net/wp-content/uploads/2020/02/Bugatti-Logo-1909.png"
            alt=""
          />
        </Link>

        <List>
          {links.map((item) => (
            <li>
              <Links href={item.link}>{item.name}</Links>
            </li>
          ))}
        </List>
      </Container>
    </>
  );
};

export default Footer;
