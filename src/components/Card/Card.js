import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  width: 300px;
  height: 370px;
  box-sizing: border-box;
  align-items: center;
  margin: 30px;
  display: flex;
  margin-top: 40px;
  flex-flow: row wrap;
  background-color: #fff;
  border: 1px solid #d3d4d6;
`;

const CardItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  heigth: 100vh;
  flex-direction: column;

  .Heading {
    font-size: 19px;
    font-weight: 600px;
    text-align: center;
    color: #020b3d;
    letter-spacing: -0.5px;
    margin-bottom: 5px;
    margin-top: 20px;
  }

  .description {
    text-align: center;
    width: 85%;
    color: #827fa5;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .image_icon {
    width: 100px;
  }

  .btn {
    width: 200px;
    height: 40px;
    margin-bottom: 20px;
    background-color: #8155ff;
    color: #ffff;
    font-size: 15px;
    border: none;
    cursor: pointer;

    @media (max-width: 590px) {
      width: 150px;
    }
  }
`;

function Card(props) {
  return (
    <>
      <CardContainer>
        <CardItem>
          <img className="image_icon" src={props.image} alt="resouces_icon" />
          <h1 className="Heading">{props.label}</h1>
          <p className="description">{props.description}</p>
          {props.active == 'true' ? (
            <a href={props.url} style={{ cursor: 'pointer' }}>
              <button className="btn">EXPLORE</button>
            </a>
          ) : (
            <Link to="/coming-soon" style={{ cursor: 'pointer' }}>
              <button className="btn">EXPLORE</button>
            </Link>
          )}
        </CardItem>
      </CardContainer>
    </>
  );
}

export default Card;
