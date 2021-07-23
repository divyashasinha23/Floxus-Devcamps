import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DevcampLogo from '../../images/devkamp.png';

const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 9vh;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px #f3f6fa;
  border-bottom: 1px solid #d3d4d6;
`;

const NavbarContainer = styled.div`
  display: flex;
  width: 85%;
  height: 9vh;
  align-items: center;

  .leftNav {
    display: flex;
    flex-basis: 50%;
    height: auto;

    img {
      height: 50px;
    }
  }

  .rightNav {
    display: flex;
    flex-basis: 50%;
    height: auto;
    justify-content: flex-end;
    align-items: center;

    a {
      text-decoration: none;
    }

    p {
      font-size: 15px;
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
  border-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <NavbarContainer>
          <div className="leftNav">
            {' '}
            <Link to="/">
              <img src={DevcampLogo} alt="Devcamp Logo" />
            </Link>
          </div>
          <div className="rightNav">
            {/* <a href="https://www.notion.so/Contribute-350d7244938146e9a8aadb3cd1074204">
              <p>Contribute</p>
            </a> */}
            <a href="https://discord.gg/PV5f6aqA2w">
              <Button>Join Community</Button>
            </a>
          </div>
        </NavbarContainer>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
