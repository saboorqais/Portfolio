import React from 'react'
import styled from 'styled-components'

function Title({value}) {
  return (
    <Wrapper>{value}</Wrapper>
  )
}

export default Title


const Wrapper = styled.div`
padding-top: 145px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 60px;
line-height: 73px;
width: auto;
@media (max-width: 950px) {
    padding-top: 30px;
}
@media (max-width: 600px)  {

font-size: 40px;
}
/* identical to box height */

/* Black */
color: #0B0C0E;



`