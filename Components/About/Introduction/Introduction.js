import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import InverseShoot from '../../Helper/BasicAnimation/InverserShoot'
import styles from '../../../styles/Alternate.module.css'
import { Waypoint } from 'react-waypoint';
import parse from 'html-react-parser';
function Introduction({value}) {
    const [AnimationState, setAnimationState] = useState("")
    
    return (
        <Waypoint
        scrollableAncestor={`window`}
            onEnter={function(props){       
                
               
                setAnimationState(`${styles.ShootAnimation}`)}
        }
        onLeave={()=>{
            setAnimationState("")
        }}
        >
            <Intro
                className={AnimationState}>
        {value}</Intro>
        </Waypoint>

    )
}

export default Introduction

const Intro = styled.div`
padding-top: 160px;
padding-left: 110px;
transition: all 1s;
width: 75%;
font-family:'Neue Montreal';
font-style: normal;
font-weight: 400;
font-size: 27px;
line-height: 140%;
justify-content: center;
text-align: justify;
display: flex;
transition: all 1s;
@media (max-width: 980px) {
    margin-right: 40px;
    padding-left: 40px;
    width: 100%;
    padding-top: 40px;

}
@media (max-width: 600px) {
    
    padding-left: 40px;
    margin-right: 40px;
    font-size: 20px;

    
}


/* or 38px */

/* Dark Greay */
color: #3C3D3E;

`
