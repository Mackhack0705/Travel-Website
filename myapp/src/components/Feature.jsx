import React, { useState } from "react";
import "../style/feature.css";
import { Link } from 'react-router-dom'


const Feature = ({ onDataFromChild }) => {
  const [search, setSearch] = useState('');
  
  const HandleClick = () => {
    onDataFromChild(search);
  }
  console.log(search);
  return (
    <div className="feature-section">
      <div className="hotel-section">
        <p>Hotels</p>
      </div>
      <div className="flight-section">
        <p>Flights</p>
      </div>

      <div className="search-section fl">
        <table>
          <thead>
            <tr>
              <th>DESTINATION</th>
              <th>CHECK IN</th>
              <th>CHECK OUT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input 
              type="text" 
              className="destination" 
              placeholder="Destination"
              onChange={(e) => setSearch(e.target.value)}
              /></td>
              <td><input type="date" name="" className="check"/></td>
              <td><input type="date" name="" className="check"/></td>
            </tr>
          </tbody>
        </table>

        <Link to={'/flight-Search'}><button className="primary-button search" onClick={HandleClick}>Search</button></Link>
      </div>
    </div>
  );
};

export default Feature;
