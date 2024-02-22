import { useEffect, useState } from 'react';
import { fetchTripForecast } from '../../api/fetchTripForecast';
import { useTripStore } from '../../stores/tripStore';
import styles from './TripForecast.module.scss';
import { TripForecastCard } from './WeekForecastCard/TripForecastCard';

export const TripForecast = () => {
    const currentTrip = useTripStore((state) => state.currentTrip);
    const [forecast, setForecast] = useState<WeekForecast | undefined>(
        undefined
    );

    useEffect(() => {
        const fetch = async () => {
            const forecast = await fetchTripForecast(currentTrip);
            setForecast(forecast);
        };
        fetch();
    }, [currentTrip]);

    if (!forecast) return <h2>Loading</h2>;

    return (
        <section className={styles.forecast}>
            <h2 className={styles.trip}>Trip</h2>
            <div className={styles.list}>
                {forecast &&
                    forecast.days.map((props) => (
                        <TripForecastCard
                            key={props.datetime}
                            {...props}
                        />
                    ))}
            </div>
        </section>
    );
};
