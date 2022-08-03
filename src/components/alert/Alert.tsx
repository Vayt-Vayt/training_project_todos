import React from 'react';
import './Alert.css'

const Alert = ({props}: any) => {

    return (
        <div className='alert'>
            <h3 className='texts'>{props}</h3>
        </div>
    );
};

export default Alert;