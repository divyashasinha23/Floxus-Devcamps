import React from 'react';
import Resources from '../Resources/Resources';
import styled from 'styled-components';
import Card from '../Card/Card';
import learnicon from '../../images/learnicon.png';
import interviewicon from '../../images/interviewicon.png';

const ResourceContainer = styled.div`
  background-color: #fafafa;
  height: 91vh;

  @media (max-width: 496px) {
    height: auto; 
  }
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

function DataStructure() {
  return (
    <>
      <ResourceContainer>
        <Resources
          Heading="DATA STRUCTURES RESOURCES"
          Description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod. Lorem ipsum dolor sit amet se"
        />
        <ResourceDetail>
          <Card
            image={learnicon}
            url="/"
            label="LEARN"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod."
          />
          <Card
            image={interviewicon}
            url="/"
            label="INTERVIEW PREPARATION"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod."
          />
        </ResourceDetail>
      </ResourceContainer>
    </>
  );
}

export default DataStructure;
