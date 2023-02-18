import React from 'react'
import { useState } from 'react'
import './Test.css'
import Table from './Table';

const Dropdown = ({ label, value, options, onChange }) => {
    return (
        <label className='dropdown-select'>
            <span >{label}</span>    
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                <option key={Math.random()} value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};

const test_schema = {
    block:{
        columns : [
            {
                name: 'id',
                type: 'label',
            },
            {
                name: 'date',
                type: 'label'
            },
            {
                name: 'key',
                type: 'input'
            },
            {
                name: 'test',
                type: 'input'
            }
        ]
    },
    mode: {
        columns : [
            {
                name: 'id',
                type: 'label',
            },
            {
                name: 'key',
                type: 'input'
            },
            {
                name: 'test',
                type: 'input'
            }
        ]
    },
    data_quality: {
        columns : [
            {
                name: 'id',
                type: 'label',
            },
            {
                name: 'date',
                type: 'label'
            },
            {
                name: 'key',
                type: 'input'
            }
        ]
    }

}



export default function Test(props) {
    const options = [
        { label: 'block', value: 'block' },
        { label: 'mode', value: 'mode' },
        { label: 'data_quality', value: 'data_quality' },
      ];

    const [value, setValue] = useState('block');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return ( 
        <div>
            <div className='dropdown'>
                <Dropdown label="Выберите таблицу" options={options} value={value} onChange={handleChange} />
                <p>Выбрано: {value}</p>
            </div>
            <Table columns={test_schema[value].columns}/>
        </div>
         
    );
}
