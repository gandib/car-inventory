import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Card from 'react-bootstrap/Card';

const ManageInventories = () => {
    const [products, setProducts] = useInventory([]);
    const navigate = useNavigate();

    const handleDeleteItem = id => {
        const proceed = window.confirm("Are you sure to delete?");
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                });
        }
    }

    return (
        <div>
            <PageTitle title='Manage Inventories'></PageTitle>
            <h2 className='mt-5 mb-3 container text-start'>Manage Inventories</h2>
            <div className='container inventoryItems-container mb-5'>
                {
                    products.map(product => <Card key={product._id}>
                        <Card.Img variant="top" style={{ height: '200px' }} src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: ${product.price}</Card.Text>
                            <Card.Text>Quantity: {product.quantity}</Card.Text>
                            <Card.Text>Supplier: {product.supplier}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><button onClick={() => handleDeleteItem(product._id)} className='btn btn-danger w-100'>Delete Item</button></small>
                        </Card.Footer>
                    </Card>)
                }
            </div>
            <div className='mb-5'><button className='btn btn-primary' onClick={() => navigate('/additem')}>Add New Item</button></div>
        </div>
    );
};

export default ManageInventories;