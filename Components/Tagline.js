import React from 'react'
import styled, { keyframes } from 'styled-components'

function Tagline() {
    return (
        <Wrapper>
            
         
            Full Stack Dev | Mobile Devlopment | BlockChain Solidity
           
           </Wrapper>
    )
}

export default Tagline
const animation = keyframes`
from{
    
    filter: blur(5px) brightness(0.9); 
    }


 

    to {
     
        filter: blur(0) brightness(0.9); 

    }

`
const Wrapper = styled.div`
height:120px;
color: white;
width: 100%;
max-width: inherit;
white-space:nowrap;
font-family:"Neue Montreal";
margin-top:286px;
font-weight: bolder;
font-size: 4vw;
justify-content: center;
display: flex;
position: absolute;
bottom: 0;
align-items: center;
animation-name: ${animation};
animation-duration: 2s;

animation-timing-function: linear;
z-index: 2;
`



