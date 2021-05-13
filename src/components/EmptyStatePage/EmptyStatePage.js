import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/empty2.png';

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 91vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    img {
      width: 80%;
    }
  }
`;

const ButtonBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #fd5b05;
  height: 40px;
  width: 150px;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: 500;
`;

const EmptyStatePage = () => {
  return (
    <>
      <EmptyContainer>
        <img src={Logo} alt="emtpy" />
        <p>Coming soon 🥳</p>
        <ButtonBack>Explore &rarr;</ButtonBack>
      </EmptyContainer>
    </>
  );
};

export default EmptyStatePage;
