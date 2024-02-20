import styles from './AddTrip.module.scss';
import { ButtonHTMLAttributes } from 'react';

interface AddTripProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const AddTrip = ({}: AddTripProps) => {
    return (
        <button className={styles.button}>
            <span className={styles.plus}>+</span> 
            <br />
            Add trip
        </button>
    );
};
