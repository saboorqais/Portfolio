import React, { useContext } from "react";
import styled from "styled-components";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import { devices, devicesInverse } from "./MediaQuries/Device";
import { BsList } from 'react-icons/bs'
import HeaderLinks from "./HeaderOptions/HeaderLink";
import Shoot from "./Helper/BasicAnimation/Shoot";
import InverseShoot from "./Helper/BasicAnimation/InverserShoot";
import Menu from "./Menu/Menu";
import StateMenu from "./Context/State";
import { GrClose } from "react-icons/gr";

import StateContext from "./Context/StateContext";
export const Header = ({ color, data }) => {
  var value = useContext(StateContext)
  function IconChanger() {
    if (value.Boolean === false) {
      return <BsList
        size={30}
        color={value.Boolean === true ? "black" : "white"}
      />
    }
    else {
      return <GrClose
        size={30}
        color={value.Boolean === true ? "black" : "white"}
      />
    }

  }
  return (
    <Head
      style={{
        backgroundColor: `${color}`
      }}
    >
      <HeaderOptions value="Saboorqais" />
      <Wrapper>
        {
          data.map(({ Name, to, hr, index }) => (

            hr ? <HeaderLinks
              key={index}
              value={Name} hr={hr} /> : <HeaderLinks
              key={index}
              value={Name} to={to} />

          ))
        }

        <IconWrapper
          style={
            {
              backgroundColor: value.Boolean === true ? "white" : "black"
            }
          }
          onClick={() => { value.setBoolean(!(value.Boolean)) }}
        >


          {IconChanger()}

        </IconWrapper>



      </Wrapper>

    </Head>
  );
};
const Head = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
padding-top: 10px;
@media  ${devicesInverse.mobileL} {
  padding-left: 50px;
padding-right: 50px;


}
padding-left: 80px;
padding-right: 80px;
height: auto;
width: auto;
`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 40px;
`

const IconWrapper = styled.div`
animation-name:${InverseShoot};
border-radius:50%;
height: 50px;
width: 50px;
display: flex;
justify-content: center;
align-items: center;
background-color: #0B0C0E;
z-index: 55;
transition: all 2s;
animation-duration: 1s;
@media ${devices.mobileL}{  
display: none;
}
`