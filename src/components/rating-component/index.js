import React from 'react';
import classes from './index.module.css';
import starFill from '../../assets/star-fill.svg';
import starEmpty from '../../assets/star-empty.svg';

const RatingComponent = ({ isFilled }) => {
    if (isFilled) {
        return <img className={classes.starFill} src={starFill} />;
    } else {
        return <img className={classes.starEmpty} src={starEmpty} />;
    }

};

export default RatingComponent;