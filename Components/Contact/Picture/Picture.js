import Avatar from '@mui/material/Avatar';
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Img from '../../../assests/1.png'
import styles from '../../../styles/Picture.module.css'
function Picture() {
    return (
        <div class={styles.avatar}>
      
        <img class={styles.avatarImage} src={Img.src} />
    </div>
    )
}

export default Picture

