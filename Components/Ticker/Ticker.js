import React from 'react'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import { FcAssistant } from "react-icons/fc";
import Router from 'next/router'
export default function Ticker() {
    return (
        <>
            <Tick
           onClick={()=>{window.open('whatsapp://send?phone=+923184536655&text=Hey Saboor');}}
            >
                <DivWrapper>
                    <FcAssistant
                        size={50}
                        style={{
                            marginTop: "23.75px",
                            marginBottom: "23.75px",
                            marginLeft:"22px"
                           
                        }}
                    />
                </DivWrapper>

                <TextWrapper>
                    Hello! Want to Communicate?
                </TextWrapper>

            </Tick>
        </>

    )
}
const Tick = styled.div`
position: absolute;
width: 350px;
height: 95px;
right: 0px;

@media (max-width: 600px) {
    top: 18vh;
}

overflow-x: hidden;
top: 35vh;
/* Black */
display: flex;
background: #0B0C0E;
border-radius: 64.2857px 0px 0px 64.2857px;
transform: translateX(280px);
transition: all 1s;
&:hover{
transform: translateX(0px);
cursor: pointer;
}

`

const TextWrapper = styled.div`
color: white;
display: flex;
overflow: hidden;
white-space: nowrap;
font-family:"Neue Montreal";
justify-content: center;
align-items: center;
margin-left: 35px;
`
const DivWrapper = styled.div`
display: flex;

`