import React from 'react';
import './ComingSoon.css';
import Card from 'react-bootstrap/Card';

const ComingSoon = () => {
    const products = [
        {
            id: 1,
            name: "Jeep Gladiator 65",
            img: "https://i.ibb.co/bPwh3y9/blue-sport-sedan-parked-yard.jpg",
            supplier: "Proton"
        },
        {
            id: 2,
            name: "Ferrari 962 Superfast",
            img: "https://i.ibb.co/SVGBB6X/white-sport-car-driving-with-high-speed-road.jpg",
            supplier: "Ratan Tata"
        },
        {
            id: 3,
            name: "Jensen Interceptor Ex",
            img: "https://i.ibb.co/f9tTh74/white-modern-sport-car-parking-road.jpg",
            supplier: "Proton"
        }
    ];

    return (
        <div>
            <h2 className='container text-start mb-3'>Coming Soon</h2>
            <div className='container product-container'>
                {
                    products.map(product => <Card key={product.id}>
                        <Card.Img variant="top" style={{ height: '200px' }} src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Supplier: {product.supplier}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Coming Soon</small>
                        </Card.Footer>
                    </Card>)
                }
            </div>
        </div >
    );
};

export default ComingSoon;