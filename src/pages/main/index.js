import React from 'react';
import MainHeader from '../../components/main-header';
import ProductsList from '../../components/products-list';

const Main = () => {

    return (
        <div className="content">
            <MainHeader />
            <ProductsList />
        </div>
    );
};

export default Main;