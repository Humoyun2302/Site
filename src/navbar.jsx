import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled('div')`
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    display: flex; 
    justify-content: center;
    justify-content: space-between;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const Navbar = () => {
  return (
    <>
      <Container>

        <img
          style={{ 'height': "35px", marginLeft: '30px', marginTop: '30px' }}
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
          alt=""
        />

        <Link to="/">
          <img
            style={{ marginLeft: '150px' }}
            width={180}
            height={100}
            src="https://1000logos.net/wp-content/uploads/2020/02/Bugatti-Logo-1909.png"
            alt=""
          />
        </Link>

        <Link to="/about">
          FIND A BUGATTI PARTNER
        </Link>
      </Container>

    </>


  );
}

export default Navbar