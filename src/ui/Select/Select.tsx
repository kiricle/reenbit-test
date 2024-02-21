import { ChangeEvent, SelectHTMLAttributes } from 'react';
import styles from './Select.module.scss';

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
    required,
    ...props
}: SelectProps) => {
    return (
        <label className={styles.label}>
            <p className={required ? styles.required : ''}>{label}</p>
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
