import React from 'react'
import './Contact.scss';
// import {FacebookIcon,InstagramIcon,TwitterIcon,GoogleIcon,PinterestIcon} 
import { FacebookOutlined,Instagram,Twitter,Google ,Pinterest} from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Be In Touch With Us!</span>
        <div className="mail">
          <input type="text" name="" id="" placeholder='Enter Your E-Mail...' />
          <button>Join Us</button>
        </div>
        <div className="icons">
          <FacebookIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
          <GoogleIcon/>
          <PinterestIcon/>
        </div>
      </div>
    </div>
  )
}
