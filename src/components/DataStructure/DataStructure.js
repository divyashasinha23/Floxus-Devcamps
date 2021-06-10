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
          Description="The finest DS and algo resources you can experience.
          Brought to your disposal- the finest DS and algo resources.
          "
        />
        <ResourceDetail>
          <Card
            image={learnicon}
            url="https://www.notion.so/eaae183a11e04aac8e6361a9e0e67908?v=a7908fc7c70b4f5d86bb12cedce9a687"
            label="LEARN"
            description="Perfect Precise and Promising."
          />
          <Card
            image={interviewicon}
            url="coming-soon"
            label="INTERVIEW PREPARATION"
            description=" Simulating the Real-World interview experience to help 
            you tackle key moments in DS & Algo interview."
          />
        </ResourceDetail>
      </ResourceContainer>
    </>
  );
}

export default DataStructure;
