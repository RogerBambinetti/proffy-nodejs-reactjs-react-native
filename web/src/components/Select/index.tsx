import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface selectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<selectProps> = ({ label, name, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select defaultValue="" id={name} {...rest}>
                {options.map(option => {
                    <option value="" disabled hidden>Selecione uma opção</option>
                    return <option key={option.value} value={option.value}>{option.label}</option>
                }
                )}
            </select>
        </div>

    );
}

export default Select;