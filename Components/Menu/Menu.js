import React, { useContext } from 'react'
import styled from 'styled-components'
import styles from '../../styles/Menu.module.css'
import StateContext from '../Context/StateContext'
import { Links } from '../Data/Data'
import {SiUpwork} from 'react-icons/si'
import {ImLinkedin} from 'react-icons/im'
import { BsGithub} from 'react-icons/bs'
import {ImGoogle2} from 'react-icons/im'
import {
    Link,
} from "react-scroll";
function Menu({ data }) {
    var value = useContext(StateContext)
    
    return (
        <div
            style={{
                transition: "all 1s",
                transform: value.Boolean === false ? "translateX(100vw)" : "translateX(0px)"

            }}

            className={`${styles.MenuClass}`}
        >
            <Wrapper>

                {data.map(({Name, hr, to, index}) => (

                    hr ? <Button
                        href={hr}
                    >
                        {Name}
                    </Button> :
                        <Link
                            activeClass="active"
                            className={styles.Button}
                            to={to}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            {Name}
                        </Link>

                ))}




            </Wrapper>

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
        </div>
    )
}

export default Menu

const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding-top: 70px;
padding-left: 61px;
justify-content: flex-start;
align-items: flex-start;
flex-wrap: wrap;
`
const Button = styled.a`
text-decoration:none;
padding-top: 30px;
color: white;
font-size: 30px;
font-family:"Neue Montreal";
background: #0B0C0E;
border: none;
`
const Linked = styled.a`
flex:.3;
padding: 5px;
color: white;
text-decoration: none;

`
const ContainerLinks = styled.div`
margin-top: 60px;
margin-left: 61px;
display: flex;
justify-content: space-between;
align-items: flex-end;
height: auto;
width: auto;



`