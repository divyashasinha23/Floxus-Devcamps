import React from 'react';
import styled from 'styled-components';
import { Layout } from '../Elements/StyledElements';
import heart from '../../images/favorite.png';
import Logo from '../../images/blueLogo2.png';
import BannerImage from '../../images/bannerimage.png';

const BannerContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  height: 50vh;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;

  @media (max-width: 496px) {
    height: auto;
    width: 90%;
  }
`;

const BannerArea = styled.div`
  display: flex;
  width: 90%;
  height: 80%;
  background-color: white;
  border-radius: 5px;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const BannerContent = styled.div`
  display: flex;
  width: 90%;
  height: 90%;

  .left {
    display: flex;
    flex-basis: 70%;
    flex-direction: column;
    justify-content: center;

    .heading {
      display: flex;
      font-size: 25px;
      font-weight: 700;
      color: #020b3d;
      letter-spacing: -0.5px;
      margin-bottom: 5px;
      padding-right: 30px;
      align-items: center;
    }

    img {
      margin-left: 7px;
    }
    .description {
      font-size: 15px;
      margin-right: 10px;
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;

    img {
      height: 50%;
    }
  }

  @media (max-width: 496px) {
    flex-direction: column;
    height: auto;
    .left {
      .heading {
        font-size: 25px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 0;
        margin-top: 20px;
      }

      .description {
        font-size: 13px;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      img {
        margin-left: 4px;
      }
    }

    .right {
      img {
        width: 60%;
        margin-bottom: 10%;
        margin-top: 10px;
      }
    }
  }
`;

const Banner = () => {
  return (
    <>
      <Layout>
        <BannerContainer>
          <BannerArea>
            <BannerContent>
              <div className="left">
                <div className="heading">
                  <span>Crafted with &#10084;&#65039; by</span>
                  <img src={Logo} alt="logo" />
                </div>
                <p className="description">
                  We are a team of passionate learners and education enthusiasts
                  working to help millennials build 21st-century skills to
                  upgrade their careers.
                </p>
              </div>
              <div className="right">
                <img src={BannerImage} alt="image" />
              </div>
            </BannerContent>
          </BannerArea>
        </BannerContainer>
      </Layout>
    </>
  );
};

export default Banner;
