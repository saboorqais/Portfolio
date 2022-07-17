import React from 'react'
import styled from 'styled-components'
function HeadingLine() {
  return (
    <Wrapper>Let’s build something cool together</Wrapper>
  )
}

export default HeadingLine

const Wrapper = styled.div`
margin-top: 50px;
color: black;
font-family: 'Neue Montreal';
font-style: normal;
font-weight: 500;
font-size: 60px;
line-height: 72px;
transition: all 1s;
`