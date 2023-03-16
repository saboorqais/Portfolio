import Head from "next/head";
import styled from "styled-components";
import About from "../Components/About/About";
import { BasicInfo } from "../Components/BasicInfo";
import StateMenu from "../Components/Context/State";
import { PhotoLink, PhotoLink2 } from "../Components/Data/Data";
import Footer from "../Components/Footer/Footer";
import { Header } from "../Components/Header";
import Menu from "../Components/Menu/Menu";
import Portfolio from "../Components/Portfolio/Portfolio";
import Ticker from "../Components/Ticker/Ticker";
import styles from '../styles/Menu.module.css'
export default function Home() {
  const HeaderData = [
    {
      Name: "Home",
      hr: "/"
    },
    {
      Name: "About",
      to: "About"
    },
    {
      Name: "Work",
      to: "RecentWork1"
    },
    {
      Name: "Testimonials",
      to: "RecentWork2"
    }


  ]
  return (
    <div
      style={{
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Main>

        <StateMenu>
          <Header data={HeaderData} color="#C7D0D9" />
          <BasicInfo />
<Menu data={HeaderData}/>
        </StateMenu>

        <Ticker />
        <About id={1} />
        <About id={2} />
        <Footer />
      </Main>
    </div>

  );
}

const Main = styled.div`
height: 100%;
width: 100%;
overflow-x: hidden;
background-color: #F4F7FA;

`
