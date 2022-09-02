import React from 'react';
import Card from 'react-bootstrap/Card';
import useInventory from '../../../hooks/useInventory';
import './InventoryItems.css';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const InventoryItems = () => {
    const [products] = useInventory([]);
    const navigate = useNavigate();
    const handleInventoryDetail = (id) => {
        navigate(`/inventory/${id}`);
    }
    if (products.length === 0) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='container text-start mb-2'>Inventory</h2>
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
                            <small className="text-muted"><button onClick={() => handleInventoryDetail(product._id)} className='btn btn-primary w-100'>Update Stock</button></small>
                        </Card.Footer>
                    </Card>)
                }
            </div>
            <div className='mt-5 mb-5 manageInventory-btn'>
                <Link to='/manageinventories'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default InventoryItems;