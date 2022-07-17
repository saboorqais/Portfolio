import React from 'react'
import styled from 'styled-components'

function Label({value}) {
    return (
        <Wrapper>

           {value}
        </Wrapper>
    )
}

export default Label


const Wrapper = styled.div`
font-family: 'Neue Montreal';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 160%;

/* identical to box height, or 29px */

/* Dark Greay */
color: #3C3D3E;

`