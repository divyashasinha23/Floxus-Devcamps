import React from 'react'
import styled from 'styled-components';


const ResourceContainer= styled.div`
width: 100%;
heigth: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
object-fit: contain;


@media (max-width: 496px) {
    height: auto;
    flex-direction: column;
  }

  .Heading {
    font-size: 30px;
    font-weight: 700;
    width: 40%;
    text-align: center;
    color: #020b3d;
    letter-spacing: -0.5px;
    margin-bottom: 5px;
  }

  .Description {
    text-align: center;
    width: 50%;
    color: #787878;
    font-size: 15px;
  }
`


function Resources(props) {
    return (
        <>
    <ResourceContainer>
    <h1 className="Heading">{props.Heading}</h1>
     <p className="Description">{props.Description}</p>
     </ResourceContainer>
        </>
    )
}

export default Resources
