import React from 'react'
import { useState } from 'react'
import './Test.css'

//TODO Скрыть жлементы Dropdown и сделать выбор
const Dropdown = ({ label, value, options, onChange }) => {
    return (
        <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};

export default function Test(props) {
    const options = [
        { label: 'Fruit', value: 'fruit' },
        { label: 'Vegetable', value: 'vegetable' },
        { label: 'Meat', value: 'meat' },
      ];

    const [value, setValue] = useState('fruit');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return ( 
        <div>
            <Dropdown label="What do we eat?" options={options} value={value} onChange={handleChange} />
            <p>We eat {value}!</p>
        </div> 
    );
}
