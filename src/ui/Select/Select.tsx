import styles from './Select.module.scss';
import { ChangeEvent, SelectHTMLAttributes, useState } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    placeholder: string;
    options: Option[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

type Option = { title: string; value: string };

export const Select = ({
    onChange,
    options,
    label,
    placeholder,
    ...props
}: SelectProps) => {

    return (
        <label className={styles.label}>
            {label}
            <select
                {...props}
                onChange={onChange}
                required
                className={styles.select}
            >
                <option
                    className={styles.option}
                    selected
                    disabled
                    hidden
                    value={placeholder}
                >
                    {placeholder}
                </option>
                {options.map(({ title, value }) => (
                    <option
                        value={value}
                        key={value}
                    >
                        {title}
                    </option>
                ))}
            </select>
        </label>
    );
};
