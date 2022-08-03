import React from 'react';
import './MySelect.css'
const MySelect = ({options, defaultValue, value, onChange}: any) => {

    
    return (
        <select 
            value={value}
            onChange={event => onChange(event.target.value)}
            className='maSelect'
        >
             <option disabled value='' >{defaultValue}</option>
             {options.map((option: {value: string, name: string} )=> 
                <option key={option.value} value={option.value} >
                    {option.name}
                </option>
                )}
        </select>
    );
};

export default MySelect;