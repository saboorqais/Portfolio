import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import image from '../../../assests/2.png'

function Item({link}) {
    return (
        <ItemWrapper>
            <ImageWrapper>
                <Image
                    src={link}
                    width={300}
                    height={145}
                />

            </ImageWrapper>

        </ItemWrapper>
    )
}

export default Item

const ItemWrapper = styled.div`
width: 400px;
height: auto;
border-radius: 4px;
background-color: #C7D0D9;
margin: 0px 40px 40px 40px;
display: inline-block;
`

const ImageWrapper = styled.div`
margin: 50px;

`