import React from 'react';
import styled from 'styled-components';
import { Layout } from '../Elements/StyledElements';
import devfind from '../../images/devfind.png';

const USPContainer = styled.div`
  display: flex;
  width: 70%;
  height: 60vh;
  margin-top: 20px;
  margin-bottom: 20px;

  .left {
    display: flex;
    flex-basis: 50%;
    height: 60vh;
    justify-content: center;
    align-items: center;

    img {
      height: 70%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    height: 60vh;
    justify-content: center;

    .heading {
      font-size: 30px;
      font-weight: 700;
      color: #020b3d;
      letter-spacing: -0.5px;
      margin-bottom: 5px;
      margin-left: 20px;
      padding-right: 30px;
    }

    .description {
      margin-left: 20px;
    }
  }

  @media (max-width: 496px) {
    flex-direction: column;
    height: auto;
    margin-top: 10%;

    .left {
      height: auto;

      img {
        width: 100%;
      }
    }

    .right {
      height: auto;

      .heading {
        font-size: 25px;
        padding-right: 0;
      }
    }
  }
`;

const USPSection = () => {
  return (
    <Layout>
      <USPContainer>
        <div className="left">
          <img src={devfind} alt="devloper finding" />
        </div>
        <div className="right">
          <p className="heading">
            Resources crafted by Developers for developers{' '}
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod.
          </p>
        </div>
      </USPContainer>
    </Layout>
  );
};

export default USPSection;
