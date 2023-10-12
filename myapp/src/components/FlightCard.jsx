import React from 'react'
import Card from 'react-bootstrap/Card';

const FlightCard = (props) => {
  return (
    <div className='fight-card'>
      <Card>
        <Card.Body>
            {props.dest}
        </Card.Body>
        <Card.Body>
            {props.dedate}
        </Card.Body>
        <Card.Body>
            {props.redate}
        </Card.Body>
        <Card.Body>
           $ {props.price}
        </Card.Body>
      </Card>
    </div>
  )
}

export default FlightCard
