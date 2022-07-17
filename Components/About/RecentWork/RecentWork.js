import React , { useState} from 'react'
import styled from 'styled-components'
import Label from './Label/Label'
import Link from './Link/Link'
import Title from './Title/Title'
import {Waypoint} from 'react-waypoint'
import styles from '../../../styles/Alternate.module.css'
function RecentWork({title,link,tag}) {
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
    <Container 
   
    className={AnimationState}>
        <Wrapper>
        <Title value={title}/>
        <Label value={tag}/>
        </Wrapper>
        <Link value={link}/>
    </Container>
    </Waypoint>
  )
}

export default RecentWork

const Container = styled.div`
width: auto;
display: flex;
margin-right: 80px;
padding-bottom: 35px;
border-bottom: solid;
border-color: #C7D0D9;


`
const Wrapper= styled.div`
width: 75%;
@media (max-width: 750px) {
width: 55%;
}

`
