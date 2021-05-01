import React from 'react';
import styled from 'styled-components';
import DevcampLogo from '../../images/mainLogo.png';

const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px #f3f6fa;
  margin-bottom: 10px;
`;

const NavbarContainer = styled.div`
  display: flex;
  width: 85%;
  height: 7vh;
  align-items: center;

  .leftNav {
    display: flex;
    flex-basis: 50%;
    height: auto;

    img {
      height: 60px;
    }
  }

  .rightNav {
    display: flex;
    flex-basis: 50%;
    height: auto;
    justify-content: flex-end;
    align-items: center;

    p {
      font-size: 16px;
      color: black;
      cursor: pointer;
      margin-right: 25px;
    }
  }

  @media (max-width: 496px) {
    .rightNav {
      display: none;
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #fd5b05;
  height: 40px;
  width: 150px;
  border-radius: 20px;
  color: white;
  font-size: 15px;
  font-weight: 500;
`;

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <NavbarContainer>
          <div className="leftNav">
            {' '}
            <img src={DevcampLogo} alt="Devcamp Logo" />{' '}
          </div>
          <div className="rightNav">
            <p>Contribute</p>
            <Button>Join Community</Button>
          </div>
        </NavbarContainer>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
