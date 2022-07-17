import React from 'react'
import styled from 'styled-components'
import { Abouts, Data, Testimonials } from '../Data/Data'
import TestimonialsWrapper from '../Testimonials/TestimonialsWrapper'
import Heading from './Heading.js/Heading'
import RecentWork from './RecentWork/RecentWork'
import RecentWorkWrapper from './RecentWork/RecentWorkWrapper'
import Section from './Section.js/Section'



function About({ id }) {

    let details = id === 1 ? Abouts : Testimonials
    const Sections1 =[
        "Recent Work",
        "Testimonials"
        ]
    return (
        <Container
        id="About"
        >
            {
              id==1?  <Section 
              Headings={details.Heading}
              Introductions={details.Text}
              />:<></>
            }
           
            <Wrapper
             id={`RecentWork${id}`}
            >
                <HeadWrapper>
                  
                    <Heading value={Sections1[id-1]} />
                </HeadWrapper>

                <FlexWrapper 

                >

                 {
                    id===1?<RecentWorkWrapper
                   
                    />:<TestimonialsWrapper
                  
                    />
                 }  

                </FlexWrapper>


            </Wrapper>


        </Container>
    )
}

export default About

const Container = styled.div`

display: flex;
flex-wrap: wrap;
width: 100%;
background-color: #F4F7FA;

margin-right: 50px;
`
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
width: inherit;




`
const FlexWrapper = styled.div`
width: 75%;
transition: all 2s;

@media (max-width: 950px) {
    width: 88%;
    padding-left: 80px;
   

    
}
@media (max-width: 950px) {
    width: 88%;
    padding-left: 40px;
    margin-right: 40px;
   

    
}
@media (max-width: 950px) {
    width: 88%;
    padding-left: 40px;
    margin-right: 40px;
   

    
}

@media (max-width: 600px) {
    
    padding-left: 40px;
    margin-right: 40px;
   font-size: 20px;

    
}



`
const HeadWrapper = styled.div`
width: 25%;
@media (max-width: 950px) {
    width: 100%;
    
}
`