import React from 'react'
import styled from 'styled-components'
import FormStructure from '../FromStructure/FormStructure'
import HeadingLine from '../HeadingLine/HeadingLine'

function Form() {
  return (
    <Wrapper>
<HeadingLine/>
<FormStructure/>
    </Wrapper>
  )
}

export default Form

const Wrapper = styled.div`
flex: 1;
flex-flow: row wrap;
margin-top: 50px;
margin-left: 50px;
transition: all 1s;
@media (max-width:630px) {
  margin-left: 25px;
  margin-right:25px
  
}

`