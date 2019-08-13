import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const FooterContainer = styled.footer`
  text-align: center;
  padding: 0.5rem;
  background-color: rgba(#ebeeec, 0.1);
  position: absolute;
  width:100%;
  bottom: 0;
  margin: 0;
`;

const Credits = styled.p`
  a {
    color: darkgrey;
  }
`;

export const Footer = () => (
  <FooterContainer>
    <Credits>
      &copy; 2019 | <Link to='/'>CRWN, Inc</Link>
    </Credits>
  </FooterContainer>
);