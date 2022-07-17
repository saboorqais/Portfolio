import React from 'react'
import styled from 'styled-components'
import { Links } from '../../Data/Data'
import ContactDetails from '../ContactDetails/ContactDetails'
import Picture from '../Picture/Picture'
import {SiUpwork} from 'react-icons/si'
import {ImLinkedin} from 'react-icons/im'
import { BsGithub} from 'react-icons/bs'
import {ImGoogle2} from 'react-icons/im'
function Information() {
  return (
    <Wrapper>
      <Picture />
      <DetailsWrapper>
      <ContactDetails />
      <Text>
        Social
      </Text>
      <ContainerLinks>
     
      
      <Linked href="https://www.upwork.com/freelancers/~01f965058cdf3cdfc0">
            <SiUpwork 
            size={30}
        style={{
          marginRight:"5px"
        }}
            />
               Upwork
        </Linked>
        <Linked href="https://www.linkedin.com/in/abdul-saboor-qaiser-6448411b1">
            <ImLinkedin
            size={30}
            style={{
                borderRadius: "50%",
                marginRight:"5px"
            }}
            />
            LinkedIn
        </Linked>

        <Linked href="https://github.com/saboorqais">
            <BsGithub
            size={30}
            style={{
              borderRadius: "50%",
              marginRight:"5px"
          }}
            />
            Github
        </Linked>

        <Linked href="https://www.guru.com/freelancers/saboor-qaiser">
            <ImGoogle2 
            size={30}
            style={{
                borderRadius: "50%",
                marginRight:"5px"
            }}
            />
            Guru
        </Linked>
     
      </ContainerLinks>
      </DetailsWrapper>
     

    </Wrapper>
  )
}

export default Information

const Wrapper = styled.div`
flex: 1;
margin-top: 50px;
transition: all 1s;
display: flex;
flex-direction: column;
transition: all 1s;
@media (max-width:630px) {
  justify-content: center;
align-items: center;
}



`

const Linked = styled.a`
flex:.3;
padding-bottom: 5px;
color: black;
text-decoration: none;
display: flex;
align-items: center;
`
const ContainerLinks = styled.div`
margin-left: 50px;
@media (max-width:630px) {
  margin-left: 25px; 
}
display: flex;
color: black;
flex-direction: column;
justify-content: space-between;
height: auto;
width: auto;
align-items: flex-start;



`
const Text = styled.div`
width: 48px;
height: 29px;
margin-left: 50px;
margin-top: 20px;
font-size: 28px;
@media (max-width:630px) {
  margin-left: 25px; 
}

/* Text/Para Medium */
font-family: 'Neue Montreal';
font-style: normal;
font-weight: 400;
line-height: 160%;
color: #3C3D3E;
margin-bottom: 10px;

`
const DetailsWrapper = styled.div`
width: 100%;

`


