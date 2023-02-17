import React from 'react'
import { useState } from 'react'
import './Test.css'

const Dropdown = ({ label, value, options, onChange }) => {
    return (
        <label className='dropdown-select'>
            <span>{label}</span>    
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};

//TODO Make working list of tables
export default function Test(props) {
    const options = [
        { label: 'block', value: 'block' },
        { label: 'mode', value: 'mode' },
        { label: 'data_quality', value: 'data_quality' },
      ];

    const [value, setValue] = useState('none');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return ( 
        <div className='dropdown'>
            <Dropdown label="Выберите таблицу" options={options} value={value} onChange={handleChange} />
            <p>Выбрано: {value}</p>
        </div> 
    );
}
