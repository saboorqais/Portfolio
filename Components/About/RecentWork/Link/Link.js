import React from 'react'
import styled from 'styled-components'
import { FiArrowUpRight } from "react-icons/fi";
function Link({value}) {
    return (
        <Wrapper
       
        >
            <Circle
             href={value}
            >
                <SizeWrapper>
                    <FiArrowUpRight
                        size={50}
                        color={"#F4F7FA"}
                    />
                </SizeWrapper>

            </Circle>


        </Wrapper>
    )
}

export default Link


const Wrapper = styled.div`
padding-top: 160px;
padding-left: 50px;
display: flex;
width: 100%;
justify-content: flex-end;
@media (max-width: 750px) {
    justify-content: flex-end;
    align-items: flex-end;
}

@media (max-width: 950px) {
    padding-top: 30px;
}
`

const Circle = styled.a`
  height: 100px;
  width: 100px;
  transition: all 1s;
  background-color: #0B0C0E;
  border-color: #0B0C0E;
  border-radius: 50%;
  display: flex;
  justify-content:center;
  align-items: center;
  @media (max-width: 650px) {
    height: 50px;
  width: 50px;
}

`

const SizeWrapper = styled.div`
  @media (max-width: 650px) {
    height: 25px;
  width: 25px;
}
display: flex;
justify-content: center;
align-items: center;


`