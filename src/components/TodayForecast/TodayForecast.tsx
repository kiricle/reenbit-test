import { useEffect, useState } from 'react';
import { fetchTodayForecast } from '../../api/fetchTodayForecast';
import { useTripStore } from '../../stores/tripStore';
import { getDayName } from '../../utils/getDayName';
import { Timer } from './Timer/Timer';
import styles from './TodayForecast.module.scss';

export const TodayForecast = () => {
    const currentTrip = useTripStore((state) => state.currentTrip);
    const [forecast, setForecast] = useState<TodayForecast | undefined>(
        undefined
    );

    useEffect(() => {
        const fetch = async () => {
            const forecast = await fetchTodayForecast(currentTrip.city);
            setForecast(forecast);
        };
        fetch();
    }, [currentTrip]);

    if (!forecast) return <h2>Loading</h2>;

    return (
        <aside className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.day}>
                    {getDayName(new Date().getDay())}
                </h2>
                <h2 className={styles.temp}>{forecast.days[0].temp}</h2>
                <h2 className={styles.city}>{currentTrip.city}</h2>
            </div>
            <Timer start_date={currentTrip.startDate} />
        </aside>
    );
};

// <sup className={styles.sup}></sup>
