import React, { useState } from 'react'
import FlightData from "../components/flightdata"
import Feature from '../components/Feature'
import Table from 'react-bootstrap/Table'
import '../pages-style/flightsearch.css'

const FlightSearch = (val) => {
    const [data, setData] = useState('');
    const HandleChild = (itemsearched)=> {
        setData(itemsearched);
    }
    console.log(data);
    return (
        <div className='flight-Search'>
            <Feature onDataFromChild={HandleChild}/>
            <ul className='list-rows'>
                <Table striped bordered hover size='lg' cellPadding={50}>
                    {FlightData.filter((flight) => {
                        return data.toLowerCase() === '' ? flight : flight.destination.toLowerCase().includes(data);
                    }).map((flight) => (
                        <tr key={flight.id} className='table-row'>
                            <td>{flight.destination}</td>
                            <td>{flight.departureDate}</td>
                            <td>{flight.returnDate}</td>
                            <td>$ {flight.price}</td>
                        </tr>
                    ))}
                </Table>
            </ul>
        </div>
    )
}

export default FlightSearch
