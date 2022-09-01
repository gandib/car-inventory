import React from 'react';
import Banner from '../Shared/Banner/Banner';
import PageTitle from '../Shared/PageTitle/PageTitle';
import ComingSoon from './ComingSoon/ComingSoon';
import InventoryItems from './InventoryItems/InventoryItems';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <ComingSoon></ComingSoon>
            <Team></Team>
        </div>
    );
};

export default Home;