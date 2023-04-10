import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled("div")`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  background-color: #ffffff;
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

const Links = styled(Link)`
  font-size: 18px;
  color: #000;
  font-weight: 500;
  text-decoration: none;
  text-transform: capitalize;
  padding: 15px 15px 10px;
  font-size: 18px;
  line-height: 25px;
  display: inline-block;

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    display: block;
    background: #000;
    transition: 0.4s transform;
    transform: scaleX(0);
    transform-origin: left;
    margin-top: 5px;
  }

  &:hover::after,
  &_active::after {
    transform: scaleX(1);
  }
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
