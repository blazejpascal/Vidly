import React from 'react';
import './Heart.css'

const Heart = (props) => {
    let classes = "heart fa fa-heart"
    if (!props.liked) classes += "-o"
    return (
        <i onClick={props.onClick} className={classes} aria-hidden="true" />
    );
};

export default Heart;


