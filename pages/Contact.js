import React, { useContext } from 'react'
import styled from 'styled-components'
import ContactContainer from '../Components/Contact/ContactContainer'
import StateMenu from '../Components/Context/State'
import Footer from '../Components/Footer/Footer'
import { Header } from '../Components/Header'
import Menu from '../Components/Menu/Menu'
import Head from 'next/head';
import Loader from '../Components/Context/Loader'
import LoadingOverlay from 'react-loading-overlay'
import LoaderContext from '../Components/Context/LoaderContext'
import Ticker from '../Components/Ticker/Ticker'
const HeaderData = [
  {
    Name: "Home",
    hr: "/"
  }
]
function Contact() {
  var active = useContext(LoaderContext)
 
  return (
    <div
    style={{
      overflowX:"hidden",
      postion:"relative"
    }}
    >


      <Main>
      
          <StateMenu>
            <Header data={HeaderData} />
            <Menu data={HeaderData}/>
          </StateMenu>
       
          <Loader>
          <ContactContainer />
          </Loader>
          <Footer />
       
      </Main>

    

    </div>
  )
}

export default Contact


const Main = styled.div`

height: 100;
width: 100%;
overflow-x: hidden;
background-color: #F4F7FA;;
position: relative;
`
