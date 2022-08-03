import React from 'react';
import './Loader.css';

const Loader = ({text}: any) => {
    return (
        <div className='title'>
            <h2 className='text'>{text}</h2>
            <div className='loader' />
        </div>
    );
};

export default Loader;