import React from 'react';
import ProductItem from '../../components/product-item';
import RatingComponent from '../../components/rating-component';
import products from '../../products.json';
import classes from './index.module.css';

const ProductsList = (props) => {

    return (
        <ul className={classes.productsList}>
            {products.map(product => {
                const img = product.imgSrc;
                return <ProductItem
                    isInStock={product.isInStock}
                    img={require(`../../assets/${img}`)}
                    title={product.title}
                    price={product.price}
                    subPriceContent={product.subPriceContent}
                    maxRating={product.maxRating}
                    rating={product.rating}
                    ratingComponent={RatingComponent}
                />
            }
            )}

        </ul>
    );
};

export default ProductsList;