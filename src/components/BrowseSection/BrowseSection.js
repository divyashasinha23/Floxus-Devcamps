import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dataLogo from '../../images/datastructure.png';
import frontendLogo from '../../images/frontendDev.png';

const BrowseWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const BrowseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: auto;
  margin-bottom: 5%;
  ${'' /* background-color: black; */}
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  ${'' /* background-color: black; */}
`;

const Heading = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #020b3d;
  letter-spacing: -0.5px;
`;

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;

  .link {
    text-decoration: none;
  }

  @media (max-width: 496px) {
    margin-top: 10px;
  }
`;

const CategoryChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  height: 60px;
  ${'' /* background-color: black; */}
  border: 1px solid #cecece;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;

  @media (max-width: 496px) {
    margin-right: 0;
    margin-top: 20px;
  }
`;

const CategoryChipWrapper = styled.div`
  display: flex;
  width: 95%;
  height: 88%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-basis: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    border-radius: 3px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  ${'' /* flex-direction:row; */}
  flex-basis: 80%;
  height: 100%;
  justify-content:center;
  align-items:center;

  .title {
    font-size: 15px;
    font-weight: 700;
    color: #020b3d;
    letter-spacing: -0.5px;
    margin-left: 5px;s
  }
`;

const BrowseSection = () => {
  return (
    <>
      <BrowseWrapper>
        <BrowseContainer>
          <Header>
            <Heading>Browse Topics</Heading>
          </Header>
          <CategoryContainer>
            <Link className="link" to="/data-structures">
              <CategoryChipContainer>
                <CategoryChipWrapper>
                  <ImageContainer>
                    <img src={dataLogo} alt="logo" />
                  </ImageContainer>
                  <ContentContainer>
                    <p className="title">Data Structure & Algo</p>
                  </ContentContainer>
                </CategoryChipWrapper>
              </CategoryChipContainer>
            </Link>

            <Link to="/frontend-dev" className="link">
              <CategoryChipContainer>
                <CategoryChipWrapper>
                  <ImageContainer>
                    <img src={frontendLogo} alt="logo" />
                  </ImageContainer>
                  <ContentContainer>
                    <p className="title">Frontend Developer</p>
                  </ContentContainer>
                </CategoryChipWrapper>
              </CategoryChipContainer>
            </Link>
          </CategoryContainer>
        </BrowseContainer>
      </BrowseWrapper>
    </>
  );
};

export default BrowseSection;
