import React,{useState} from 'react'
import styled from 'styled-components';

import Item from './Item/Item';

function Portfolio({data}) {
   
    return (

 
        <Wrapper >
   {data.map(link=>(
    <Item link={link}/>
   ))}
         
        </Wrapper>
    
    )
}

export default Portfolio

const Wrapper = styled.div`
overflow-x: scroll;
scrollbar-width: none;
white-space: nowrap;
width: 100%;
margin-top: 50px;
`
