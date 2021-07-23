import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  .link {
    text-decoration: none;
    margin-left: 3px;
    color: #020b3d;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        © 2021
        <a href="https://floxus.co/" className="link">
          Floxus Education Pvt. Ltd.
        </a>
      </FooterContainer>
    </>
  );
};

export default Footer;
