import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import logo from '../images/Company-logo.png'
import '../style/homefooter.css'

const HomeFooter = () => {
  return (
    <div className='footer-section'>
      <table className='footer-table'> 
        <tr>
            <th><img src={logo} alt="" style={{height: 50, width: 80}} /></th>
            <th>Company</th>
            <th>Contact</th>
            <th>More</th>
            <th><FaFacebook />
            <FaInstagram />
            <FaTwitter /> </th>
            
        </tr>
        <tr>
            <td rowSpan={3}>Book your trip in minute, get full control for much longer.</td>
            <td><a href="#">About</a></td>
            <td><a href="#">Help/FAQ</a></td>
            <td><a href="#">Airlinefees</a></td>
            <td rowSpan={3}>Discover our app</td>
        </tr>
        <tr>
            <td><a href="#">Careers</a></td>
            <td><a href="#">Press</a></td>
            <td><a href="#">Airline</a></td>
        </tr>
        <tr>
            <td><a href="#">Mobile</a></td>
            <td><a href="#">Affiliate</a></td>
            <td><a href="#">Low far tips</a></td>
        </tr>
      </table>
    </div>
  )
}

export default HomeFooter
