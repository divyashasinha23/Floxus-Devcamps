import React from 'react';
import styled from 'styled-components';
import { Layout } from '../Elements/StyledElements';
import Polygon1 from '../../images/p1.png';
import Polygon2 from '../../images/p2.png';

const HeroContainer = styled.div`
  display: flex;
  width: 80%;
  height: 50vh;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 496px) {
    height: auto;
    flex-direction: column;
  }
`;

const PolygonContainer = styled.div`
  display: flex;
  flex-basis: 30%;
  height: 50vh;

  .polygon1 {
    height: 60%;
    margin-top: auto;
    margin-left: 0;
  }

  .polygon2 {
    height: 60%;
    margin-bottom: auto;
    margin-left: 0;
  }

  @media (max-width: 496px) {
    display: none;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: auto;
  justify-content: center;
  align-items: center;

  .heading {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    color: #020b3d;
    letter-spacing: -0.5px;
    margin-bottom: 5px;
  }

  .description {
    text-align: center;
  }

  @media (max-width: 496px) {
    width: 80%;
  }
`;

const HeroSection = () => {
  return (
    <Layout>
      <HeroContainer>
        <PolygonContainer>
          <img className="polygon1" src={Polygon1} alt="pattern1" />
        </PolygonContainer>
        <HeroContent>
          <p className="heading">Learn with Curated Resources</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod.
          </p>
        </HeroContent>
        <PolygonContainer>
          <img className="polygon2" src={Polygon1} alt="pattern1" />
        </PolygonContainer>
      </HeroContainer>
    </Layout>
  );
};

export default HeroSection;
