import React from 'react'
import styled from 'styled-components'

export const Intro = () => {
  return (
    <Introduction>Hi, I am</Introduction>
  )
}

const  Introduction = styled.div`

position: absolute;
width: 171px;
height: 58px;
left: 256px;
top: 351px;

font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 47px;
display: flex;
align-items: flex-end;
text-align: center;

color: #000000;`
