import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from 'styled-components'
import InverseShoot from "../Helper/BasicAnimation/InverserShoot";
import Shoot from "../Helper/BasicAnimation/Shoot";
import { devicesInverse } from "../MediaQuries/Device";
import styles from '../../styles/Header.module.css'
function HeaderLinks({ value ,to,hr}) {




    return (
        <Option>
{
    hr?<Text
    href={hr}
    >Home</Text>:(<Link
        activeClass="active"
        className={styles.Button}
        to={to}
        spy={true}
        smooth={true}
        duration={500}
     >{value}</Link>)
}
            
        </Option>
    );
}
export default HeaderLinks;


const Option = styled.div`
display:inline;
@media  ${devicesInverse.mobileL} {
    display: none;}
animation-name: ${InverseShoot};
animation-duration: 1s;
`

const Text = styled.a`
font-family:"Neue Montreal";
color: black;
text-decoration: none;
`
