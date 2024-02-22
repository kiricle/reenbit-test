import { ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './DateInput.module.scss';

interface DateInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

export const DateInput = ({
    label,
    value,
    onChange,
    required,
    ...props
}: DateInputProps) => {

    return (
        <label>
            <p
                className={[styles.label, required ? styles.required : ''].join(
                    ' '
                )}
            >
                {label}
            </p>
            <input
                {...props}
                className={styles.date}
                onChange={onChange}
                type="date"
                placeholder="Select date"
                value={value}
                required
            />
        </label>
    );
};
