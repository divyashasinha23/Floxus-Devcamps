import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
width: 320px;
height: 370px;
border: 1.5px solid #d3d3d3;
box-sizing: border-box;
align-items: center;
margin: 15px auto;
display: flex;
margin-top: 70px;
flex-flow: row wrap;
background-color: #fff;
`

const CardItem = styled.div`
display: flex;
justify-content: center;
align-items:center;
width:100%;
heigth: 100vh;
flex-direction: column;


.Heading {
    font-size: 20px;
    text-align: center;
    color: #020b3d;
    letter-spacing: -0.5px;
    margin-bottom: 5px;
    margin-top:20px;
  }

  .description {
    text-align: center;
    width: 85%;
    color: #787878;
    font-size: 12px;
    margin-bottom: 20px;
  }

  .btn {
    width: 200px;
    height: 40px;
    margin-bottom: 20px;
    background-color: #4066E0;
    color: #ffff;
    font-size: 15px;
    border: none;
  }
`

function Card(props) {
    return (
        <>
        <CardContainer> 
          <CardItem>
              <h1 className="Heading">
                  {props.label}
              </h1>
              <p className='description'>
                 {props.description}
              </p>
              <button className="btn">EXPLORE</button>
          </CardItem>
        </CardContainer>
        </>
    )
}

export default Card
