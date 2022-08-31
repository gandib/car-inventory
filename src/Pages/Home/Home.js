import React from 'react';
import Banner from '../Shared/Banner/Banner';
import PageTitle from '../Shared/PageTitle/PageTitle';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
        </div>
    );
};

export default Home;