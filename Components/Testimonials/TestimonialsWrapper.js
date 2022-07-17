import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import styled from 'styled-components'
import Introduction from '../About/Introduction/Introduction'
import Section from '../About/Section.js/Section'
import styles from '../../styles/Alternate.module.css'
import { Testimonials } from '../Data/Data'
import Heading from '../About/Heading.js/Heading'
function TestimonialsWrapper() {
  const [AnimationState, setAnimationState] = useState("")
  return (
    <Waypoint
      scrollableAncestor={`window`}
      onEnter={function (props) {


        setAnimationState(`${styles.ShootAnimation}`)
      }
      }
      onLeave={() => {
        setAnimationState("")
      }}
    >
      <Container
      className={AnimationState}
      >
        {Testimonials.Text.map(({ Remarks, Name, CompanyName ,link}) => (
          <Wrapper>
            <Text>{Remarks}</Text>
            <TextSmall href={link}>{Name}</TextSmall>
            <TextSmall href={link}>{CompanyName}</TextSmall>

          </Wrapper>


        ))}


      </Container>
    </Waypoint>
  )
}

export default TestimonialsWrapper

const Container = styled.div`
margin-top: 160px;

width: auto;
box-sizing: border-box;

@media (max-width:950px) {
  margin-top: 0px;
}

`

const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
transition: all 1s;

font-family:'Neue Montreal';
font-style: normal;
font-size: 27px;
line-height: 140%;
align-items: flex-start;
justify-content: flex-start;
display: flex;
transition: all 1s;
@media (max-width: 980px) {
    width: 100%;
    padding-top: 20px;

}
@media (max-width: 600px)  {

  font-size: 20px;
}
`

const TextSmall = styled.a`
transition: all 1s;
margin-top: 10px;
font-family:'Neue Montreal';
font-style: italic;
font-size: 27px;
line-height: 140%;
text-align: justify;
color: black;
text-decoration: none;
display: flex;
transition: all 1s;
@media (max-width: 980px) {
   
    width: 100%;
    padding-top: 20px;
    font-size: 20px;
   

}
`
const Wrapper = styled.div`
margin-top: 70px;

`
