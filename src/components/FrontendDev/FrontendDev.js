import React from 'react';
import Resources from '../Resources/Resources';
import styled from 'styled-components';
import Card from '../Card/Card';
import learnicon from '../../images/learnicon.png';
import interviewicon from '../../images/interviewicon.png';

const ResourceContainer = styled.div`
  background-color: #fafafa;
  height: 92vh;
`;

const ResourceDetail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: row-wrap;
  align-items: center;
  justify-content: center;
  align-content: flex-start;

  @media (max-width: 496px) {
    flex-direction: column;
  }
`;

function FrontendDev() {
  return (
    <>
      <ResourceContainer>
        <Resources
          Heading="Frontend Dev Resources"
          Description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod. Lorem ipsum dolor sit amet se"
        />

        <ResourceDetail>
          <Card
            image={learnicon}
            url="https://www.notion.so/b3f74abbe8e94926adfb538aab64abc7?v=cdc716d74d7c48c5a8430ecea704587c"
            label="LEARN"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod."
          />
          <Card
            image={interviewicon}
            url="coming-soon"
            label="INTERVIEW PREPARATION"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod."
          />
        </ResourceDetail>
      </ResourceContainer>
    </>
  );
}

export default FrontendDev;
