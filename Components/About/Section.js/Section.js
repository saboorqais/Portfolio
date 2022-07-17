import React from 'react'
import { Abouts } from '../../Data/Data'
import Heading from '../Heading.js/Heading'

import Introduction from '../Introduction/Introduction'

function Section({Headings , Introductions}) {
  return (
    <>
        <Heading value={Headings} />
        <Introduction value={Introductions}/>
    </>
  )
}

export default Section