import React from 'react';
import Resources from '../Resources/Resources';
import styled from 'styled-components';
import Card from '../Card/Card';


const ResourceContainer = styled.div`
background-color: #f5f5f5;
`


const ResourceDetail = styled.div`
display: flex;
flex-direction: row;
flex-wrap: row-wrap;
align-items: center;
align-content: flex-start;
`


function DataStructure() {
    return (
        <>
        <ResourceContainer>
            <Resources 
            Heading= 'DATA STRUCTURES RESOURCES'
            Description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod. Lorem ipsum dolor sit amet se'
            /> 
            <ResourceDetail >
            <Card 
            name= "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod."
            label= 'LEARN'
            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.'
            />
            <Card 
            label = 'INTERVIEW PREPARATION'
            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.'
            />
            </ResourceDetail>
            </ResourceContainer>
        </>
    )
}

export default DataStructure
