import { useEffect, useState } from 'react';
import styles from './Timer.module.scss';
import { getTimeLeft } from '../../../utils/getTimeLeft';

export const Timer = ({ start_date }: { start_date: Date }) => {
    const [time, setTime] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const timeLeft = getTimeLeft(start_date);
            setTime(timeLeft);
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    return (
        <section className={styles.timer}>
            <span className={styles.number}>
                {time.days}
                <span className={styles.measure}>days</span>
            </span>
            <span className={styles.number}>
                {time.hours}
                <span className={styles.measure}>hours</span>
            </span>
            <span className={styles.number}>
                {time.minutes}
                <span className={styles.measure}>minutes</span>
            </span>
            <span className={styles.number}>
                {time.seconds}
                <span className={styles.measure}>seconds</span>
            </span>
        </section>
    );
};
