import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Links } from '../Data/Data'
import {SiUpwork} from 'react-icons/si'
import {ImLinkedin} from 'react-icons/im'
import { BsGithub} from 'react-icons/bs'
import {ImGoogle2} from 'react-icons/im'
function Footer() {
    return (
        <Wrapper>
            <Wrapper2>

                <TextWrapper>
                    Have something in mind?<br /><Image
                        src={require('../../assests/1-modified.png')}
                        width={100}
                        height={100}
                    />
                    let's build it together
                </TextWrapper>

                <ButtonWrapper>
                    <Button
                    href="./Contact"
                    >

                        Get in touch
                    </Button>

                </ButtonWrapper>
            </Wrapper2>
            <Wrapper3>

                <Text>Built by Saboor
                </Text>
                <ContainerLinks>

        <Linked href="https://www.upwork.com/freelancers/~01f965058cdf3cdfc0">
            <SiUpwork 
            size={30}
        
            />
        </Linked>
        <Linked href="https://www.linkedin.com/in/abdul-saboor-qaiser-6448411b1">
            <ImLinkedin
            size={30}
            style={{
                borderRadius: "50%"
            }}
            />
        </Linked>

        <Linked href="https://github.com/saboorqais">
            <BsGithub
            size={30}
            />
        </Linked>

        <Linked href="https://www.guru.com/freelancers/saboor-qaiser">
            <ImGoogle2 
            size={30}
            style={{
                borderRadius: "50%"
            }}
            />
        </Linked>


                </ContainerLinks>


            </Wrapper3>


        </Wrapper>
    )
}

export default Footer

const Wrapper2 = styled.div`
height: auto;
width: auto;
padding-top: 80px;
padding-left: 80px;
padding-right: 88px;
display: flex;
flex-wrap: wrap;
@media (max-width:600px){
    padding-left: 30px;
padding-right: 30px;
}
`

const Wrapper = styled.div`

margin-top: 100px;
background-color: #0B0C0E;
width: 100%;
height: auto;
color: #F4F7FA;

`


const TextWrapper = styled.p`

width: auto;
font-size: 50px;
font-weight: 500px;
font-family: "Neue Montreal";


`
const ButtonWrapper = styled.div`
padding-right: 50px;
width: 45%;
display: flex;
justify-content: flex-end;
align-items: center;
flex-wrap: wrap;
@media (max-width:1200px) {
    width: 100%;   
    justify-content: flex-start;
}

`

const Button = styled.a`
text-decoration: none;
background-color: #F4F7FA;
width: 190px;
height: 70px;
border-radius: 170px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Neue Montreal';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: black;
`

const Wrapper3 = styled.div`
display: flex;
padding-top: 60px;
padding-left: 60px;
padding-right: 60px;
padding-bottom: 20px;
flex-wrap: wrap;
flex-basis: 50%;

`
const Text = styled.div`
width: 50%;
min-width: 50%;
display: flex;
align-items: center;
flex: 1;
margin-left: 20px;
`
const Linked = styled.a`
flex:.3;
padding: 5px;
color: white;
text-decoration: none;
display: flex;
justify-content: space-around;
align-items: flex-end;
`
const ContainerLinks = styled.div`
flex :1;
display: flex;
justify-content: flex-end;

`