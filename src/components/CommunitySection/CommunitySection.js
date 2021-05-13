import React from 'react';
import styled from 'styled-components';
import communityLogo from '../../images/community.png';
import courseLogo from '../../images/course.png';
import youtubeLogo from '../../images/youtube.png';

const CommunityContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const CommunityWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 30vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 496px) {
    height: auto;
    margin-bottom: 15%;
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

  .heading{
    font-size: 15px;
    font-weight: 500;
    color: #020b3d;
    letter-spacing: -0.5px;
    margin-left: 5px;s
  }
`;

const CommunitySection = () => {
  return (
    <>
      <CommunityContainer>
        <CommunityWrapper>
          <CategoryChipContainer>
            <CategoryChipWrapper>
              <ImageContainer>
                <img src={communityLogo} alt="community" />
              </ImageContainer>
              <ContentContainer>
                <p className="heading">Join Community &rarr;</p>
              </ContentContainer>
            </CategoryChipWrapper>
          </CategoryChipContainer>

          <CategoryChipContainer>
            <CategoryChipWrapper>
              <ImageContainer>
                <img src={courseLogo} alt="course" />
              </ImageContainer>
              <ContentContainer>
                <p className="heading">Join Our Courses &rarr;</p>
              </ContentContainer>
            </CategoryChipWrapper>
          </CategoryChipContainer>

          <CategoryChipContainer>
            <CategoryChipWrapper>
              <ImageContainer>
                <img src={youtubeLogo} alt="youtube" />
              </ImageContainer>
              <ContentContainer>
                <p className="heading">Join YouTube Series &rarr;</p>
              </ContentContainer>
            </CategoryChipWrapper>
          </CategoryChipContainer>
        </CommunityWrapper>
      </CommunityContainer>
    </>
  );
};

export default CommunitySection;
