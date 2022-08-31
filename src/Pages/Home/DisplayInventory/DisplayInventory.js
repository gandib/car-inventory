import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';

const DisplayInventory = () => {
    const [products] = useInventory([]);

    const handleDelivered = id => {
        const proceed = window.confirm('Are you sure ')
    }

    return (
        <div>
            <div className='container inventoryItems-container'>
                {
                    products.slice(0, 6).map(product => <Card key={product._id}>
                        <Card.Img variant="top" style={{ height: '200px' }} src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: ${product.price}</Card.Text>
                            <Card.Text>Quantity: {product.quantity}</Card.Text>
                            <Card.Text>Supplier: {product.supplier}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><button onClick={() => handleDelivered(product._id)} className='btn btn-primary w-100'>Delivered</button></small>
                        </Card.Footer>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default DisplayInventory;