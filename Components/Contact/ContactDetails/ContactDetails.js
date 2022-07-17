import React from 'react'
import styles from '../../../styles/ContactDetails.module.css'
function ContactDetails() {
  return (
    <div
      className={styles.Wrapper}
    >Contact Details
      <div
        className={styles.TextWrapper}
      onClick={()=>{window.open('mailto:saboor.qaiser456@gmail.com');}}
      >
        saboor.qaiser456@gmail.com
      </div>
      <div
          onClick={()=>{window.open('whatsapp://send?phone=+923184536655&text=Hey Saboor');}}
        className={styles.TextWrapper}
      >
        +923184536655
      </div>
     
    </div>
  )
}

export default ContactDetails