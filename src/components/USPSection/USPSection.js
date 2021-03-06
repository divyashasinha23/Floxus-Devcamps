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
      height: 60%;
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
    width: 80%;

    .left {
      height: auto;

      img {
        width: 90%;
      }
    }

    .right {
      height: auto;

      .heading {
        font-size: 25px;
        padding-right: 0;
      }

      .description {
        font-size: 14px;
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
            Resources Handpicked by Developers for developers{' '}
          </p>
          <p className="description">
            Learning Resources crafted by Domain Experts to make you industry
            Ready and for a fast paced career growth.
          </p>
        </div>
      </USPContainer>
    </Layout>
  );
};

export default USPSection;
