import React from 'react'
import './footer.css'
import {FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const footer = () => {
  return (
    <footer className='footer'>
        <p> <span>&#169;</span> Copyright 2022 @xxxxx | All Rights Reserved - Please do not use 9jafoodie content or images without prior explicit permission | Privacy Policy</p>
        <FaFacebookF /> <FaInstagramSquare className='fa'/> <FaTwitter className='fa'/>
    </footer>
  )
}

export default footer