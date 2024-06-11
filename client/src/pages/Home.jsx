import React from 'react'
import './Home.css'
import { IoEyeSharp } from "react-icons/io5";
import { GoPencil } from "react-icons/go";

import { MdDeleteOutline } from "react-icons/md";

function Home() {
  return (
    <>
    <div className="home-top">
      <div className="home-button">
        <button type="button" className='button1'>+Add Data</button>
      </div>
      <div className="home-table">
        <table>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Job</th>
            <th>Number</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>1</td>
            <td>Heeral</td>
            <td>heeral@gmail.com</td>
            <td>MERN Stack</td>
            <td>1234567890</td>
            <td><button className='button2'><IoEyeSharp /></button></td>
            <td><button className='button3'><GoPencil /></button></td>
            <td><button className='button4'><MdDeleteOutline /></button></td>
          </tr>
        </table>
      </div>
    </div>
    </>
  )
}

export default Home