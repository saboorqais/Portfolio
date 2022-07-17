import React from 'react'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import img from '../assests/1.png'
import Tagline from './Tagline'

function Myphoto() {
    return (
        <Cover>
            <Image
            width={850}
            height={600}
            src={img}/>
        </Cover>
    )
}

export default Myphoto
const fadeIn = keyframes`
0%{opacity:0;}
100%{
    opacity: 1;
}


`
const Cover = styled.div`
display: flex;
justify-content: center;
position: absolute;
bottom: 0;
background-color: none;

animation-name: ${fadeIn};
animation-duration: 2s;

`
