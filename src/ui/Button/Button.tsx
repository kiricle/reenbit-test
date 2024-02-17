import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

type Appearance = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    appearance: Appearance;
    children: ReactNode;
    className?: string;
}

export const Button = ({
    appearance,
    children,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={[styles.button, styles[appearance], className].join(' ')}
            {...props}
        >
            {children}
        </button>
    );
};
