import React from 'react';
import Resources from '../Resources/Resources';
import styled from 'styled-components';


const ResourceContainer = styled.div`
background-color: #f5f5f5;`

function SystemDesign() {
    return (
        <>
         <ResourceContainer>
        <Resources 
        Heading= 'System Design Resources'
        Description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod. Lorem ipsum dolor sit amet se'
        /> 
        </ResourceContainer>
    </>
    )
}

export default SystemDesign
