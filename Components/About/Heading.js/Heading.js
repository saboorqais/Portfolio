import React, { useState } from 'react'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint'
import styles from '../../../styles/Alternate.module.css'
function Heading( {value} ) {
   
    const [AnimationState, setAnimationState] = useState("")
    return (
        <Waypoint
            scrollableAncestor={`window`}
            onEnter={function (props) {


                setAnimationState(`${styles.ShootInverseAnimation}`)
            }
            }
            onLeave={() => {
                setAnimationState("")
            }}
        >
            <Head
                className={AnimationState}
            >{value}</Head>
        </Waypoint>


    )
}

export default Heading

const Head = styled.div`
margin-top: 160px;
margin-left: 40px;
width: 5%;
@media (max-width: 950px) {
    width: 35%;
    margin-top: 60px;
    
}
@media (max-width: 650px) {
    width: 50%;
    
}

@media (max-width: 600px) {
    

    margin-left: 40px;
    font-size: 27px;

    
}
/* Text / Heading 3 */
font-family: 'Neue Montreal';
font-style: normal;
font-weight: bolder;
font-size: 40px;
line-height: 48px;

/* identical to box height */

/* Black */
color: #0B0C0E;

`