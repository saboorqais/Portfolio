import React, { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components'
import InverseShoot from "../Helper/BasicAnimation/InverserShoot";
import Shoot from "../Helper/BasicAnimation/Shoot";


let val;
function HeaderOptions({ value, display }) {




  return (
    <Option>
      <Text onClick={() => {
        window.scrollBy(0, 100);

      }}>{value}</Text>
    </Option>
  );
}
export default HeaderOptions;







const Option = styled.div`
display:inline;

animation-name: ${Shoot};
animation-duration: 1s;


`

const Text = styled.a`
font-family:"Neue Montreal";
color: black;
text-decoration: none;
`
