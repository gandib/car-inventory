import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './AddItem.css';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://calm-forest-65142.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
        toast("You New Item successfully added");
    };
    return (
        <div>
            <PageTitle title='Add Items'></PageTitle>
            <h2 className='mt-5 container text-start mb-3'>Add New Item</h2>
            <form className='add-item-container mb-5' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder='Product Name' /> <br />
                <input {...register("img", { required: true })} placeholder='Image URL' /> <br />
                <input {...register("description", { required: true })} placeholder='Description' /> <br />
                <input type="number" {...register("price")} placeholder='Price' /> <br />
                <input type="number" {...register("quantity")} placeholder='Quantity' /> <br />
                <input {...register("supplier", { required: true })} placeholder='Supplier Name' /> <br />
                <input {...register("email", { required: true })} defaultValue={user?.email} readOnly /> <br />
                <input className='add-item-btn' type="submit" value='Submit' />
            </form>
        </div >
    );
};

export default AddItem;