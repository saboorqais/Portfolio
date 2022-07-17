import React, { useContext } from 'react'
import styled from 'styled-components'
import StateContext from './Context/StateContext'
import { Header } from './Header'
import { devices, devicesInverse } from './MediaQuries/Device'
import Myphoto from './Myphoto'
import Tagline from './Tagline'
import Ticker from './Ticker/Ticker'
export const BasicInfo = () => {
 
  return (
    <Basic>
       
        <Myphoto/>
        <Tagline/>
       
    </Basic>
  )
}
const Basic = styled.div`
  height:70vh;
  max-height: 70vh;
  background-color:#C7D0D9;
  padding-top:26px;
position: relative;
display: flex;
justify-content: center;
transition: all 1s;

@media (max-width: 600px) {
  height: 50vh;
}

  `




