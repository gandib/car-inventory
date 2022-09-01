import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const email = user?.email;
    //     const getMyItems = async () => {
    //         const url = `http://localhost:5000/inventory?email=${email}`;
    //         try {
    //             const { data } = await axiosPrivate.get(url);
    //             setProducts(data);
    //         }
    //         catch (error) {
    //             console.log(error.message)
    //             if (error.response.status === 401 || error.response.status === 403) {
    //                 signOut(auth);
    //                 navigate('/login');
    //             }
    //         }
    //     }
    //     getMyItems();

    // }, [user]);

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
            <PageTitle title='My Items'></PageTitle>
            <h2 className='mt-5 mb-3 container text-start'>My Items</h2>
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
        </div>
    );
};

export default MyItems;