import React, { useState } from 'react';
import './ManageInventories.css';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';

const ManageInventories = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(12);
    const [products, setProducts] = useInventory([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch('https://calm-forest-65142.herokuapp.com/inventoryCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / size);
                setPageCount(pages);
            });
    }, [size]);


    useEffect(() => {
        fetch(`https://calm-forest-65142.herokuapp.com/inventory?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size]);





    const handleDeleteItem = id => {
        const proceed = window.confirm("Are you sure to delete?");
        if (proceed) {
            const url = `https://calm-forest-65142.herokuapp.com/inventory/${id}`;
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

            <div className='pagination'>
                {
                    [...Array(pageCount).keys()].map(number => <button className={page === number ? 'selected' : ''} onClick={() => setPage(number)}>
                        {number + 1}
                    </button>)
                }
                <select onChange={e => setSize(e.target.value)}>
                    <option value="6">6</option>
                    <option value="12" selected>12</option>
                    <option value="15">15</option>
                    <option value="21">21</option>
                </select>
            </div>
        </div>
    );
};

export default ManageInventories;