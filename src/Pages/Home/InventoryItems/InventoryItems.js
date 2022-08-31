import React from 'react';
import Card from 'react-bootstrap/Card';
import useInventory from '../../../hooks/useInventory';
import './InventoryItems.css';

const InventoryItems = () => {
    const [products] = useInventory([]);
    return (
        <div>
            <h2 className='container text-start mb-2'>Inventory</h2>
            <div className='container inventoryItems-container'>
                {
                    products.slice(0, 6).map(product => <Card key={product._id}>
                        <Card.Img variant="top" style={{ height: '200px' }} src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;