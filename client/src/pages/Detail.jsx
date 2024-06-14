import React from 'react';
import './Detail.css';
import { IoPersonSharp } from "react-icons/io5";

import { MdEmail } from "react-icons/md";

import { MdWork } from "react-icons/md";

import { FaPhone } from "react-icons/fa6";

import { FaLocationDot } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";

import { MdDeleteOutline } from "react-icons/md";

function Detail() {
  return (
    <>
    <div className="detail-top">
      <h1>Welcome Heeral Gour</h1>
      <div className="detail-card">
        <div className="card-left">
        
        <IoPersonSharp size='30px'/>
          <h3>Name:<span>Heeral Gour</span></h3>
          <h3>Age:<span>21</span></h3>
          <p><MdEmail size='20px'/>Email:<span>gour123@gmail.com</span></p>
          <p><MdWork size='20px'/>Occuption:<span>Web Developer</span></p>
        </div>
        <div className="card-right">
        <button className='button3'><GoPencil size='20px' /></button>
        <button className='button4'><MdDeleteOutline size='20px'/></button>
          <p><FaPhone size='20px'/>Mobile:<span>+91 9456789432</span></p>
          <p><FaLocationDot size='20px'/>Location:<span>Ujjain</span></p>
          <p>Description:<span>I am a web Developer in HTML,CSS,JS.</span></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Detail