import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import TitleBar from "../components/TitleBar"
import SideBar from "../components/SideBar"

export default function Home() {
  return (
    <div>
      <TitleBar></TitleBar>
      <SideBar></SideBar>
    </div>
  )
}
