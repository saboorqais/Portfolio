import React, { useContext } from 'react'
import LoadingOverlay from 'react-loading-overlay'
import styled from 'styled-components'
import LoaderContext from '../Context/LoaderContext'
import Form from './Form/Form'
import Information from './Information/Information'
import BarLoader from 'react-spinners/BarLoader'
function ContactContainer() {
  var active = useContext(LoaderContext)
  return (
    <LoadingOverlay
    active={active.Boolean}
    spinner={<BarLoader />}
  >
    <Wrapper>
<Information/>
<Form/>



    </Wrapper>
    </LoadingOverlay>
  )
}

export default ContactContainer


const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
flex-basis: 50%;
height: auto;
transition: all 1s;
`