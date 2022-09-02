import React from 'react';
import './DisplayInventory.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DisplayInventory = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState({});
    const [quantities, setQuantities] = useState();
    const [increaseQuantity, setIncreaseQuantity] = useState();

    useEffect(() => {
        const url = `https://calm-forest-65142.herokuapp.com/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [quantities, increaseQuantity]);

    const handleDelivered = () => {
        let quantity = product?.quantity;
        if (quantity >= 1) {
            quantity = product?.quantity - 1;
            setQuantities(quantity);
        }

        const updatedInventory = { quantity: quantity };
        const url = `https://calm-forest-65142.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInventory)
        })
            .then(res => res.json())
            .then(data => {
                setQuantities(data.modifiedCount);
                alert('Delivered successfully');
            });
    }

    const handleIncreaseQuantity = (event) => {
        event.preventDefault();
        const addQuantity = parseInt(event.target.quantity.value);
        console.log(addQuantity)
        const quantity = product?.quantity + addQuantity;
        setIncreaseQuantity(quantity);
        console.log(addQuantity, quantity)
        const updatedInventory = { quantity: parseInt(quantity) };
        const url = `https://calm-forest-65142.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInventory)
        })
            .then(res => res.json())
            .then(data => {
                setIncreaseQuantity(data.matchedCount);
                alert('Delivered successfully');
            });
        event.target.reset();
    }

    return (
        <div className='container mb-5 mt-5 displayInventoryItems-container'>

            <PageTitle title='Display Inventory'></PageTitle>
            <div className='container'>
                <Card>
                    <Card.Img variant="top" style={{ height: '200px' }} src={product.img} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>Price: ${product.price}</Card.Text>
                        <Card.Text>Quantity: {product.quantity}</Card.Text>
                        <Card.Text>Supplier: {product.supplier}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><button onClick={handleDelivered} className='btn btn-primary w-100'>Delivered</button></small>
                    </Card.Footer>
                </Card>
            </div>
            <Form onSubmit={handleIncreaseQuantity}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Restock the items</Form.Label>
                    <Form.Control type="number" name="quantity" placeholder="Enter Quantity" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update Quantity
                </Button>
            </Form>
        </div>
    );
};

export default DisplayInventory;