"use client"
import Container from "../Container"
import Link from "next/link"
import { Redressed } from "next/font/google"
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import user from '../../../public/image/user.png'
import Image from "next/image";
const redressed = Redressed({ subsets: ["latin"], weight: ["400"] })

const Navbar = () => {
    return (
        <div className="navbar">
        <Container>
            <div className="main-navbar">
          <div className="logo">
            <h1 className={`${redressed.className}`}>2ABBU</h1>
          </div>
          <div className="navitem">
            <Link href={'/'}>HOME</Link>
            <Link href={'/'}>PRODUCTS</Link>
            <Link href={'/'}>CONTACT</Link>
            <Link href={'/'}>LOGIN</Link>

          </div>

          <div className="logo-section">
           <Link href={'/'}>
            <LocalMallOutlinedIcon/>
           </Link>
           <Link href={'/'}>
              <div className="user-image">
              <Image src={user} alt="" />
              </div>
           </Link>
          </div>
          </div>
          </Container>
        </div>

    );
}

export default Navbar;