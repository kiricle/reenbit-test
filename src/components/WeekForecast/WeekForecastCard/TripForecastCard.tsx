import { getDayName } from '../../../utils/getDayName';
import styles from './TripForecastCard.module.scss';

export const TripForecastCard = ({
    datetime,
    tempmax,
    tempmin,
}: WeekForecastDay) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.day}>
                {getDayName(new Date(datetime).getDay())}
            </h3>
            <img
                className={styles.img}
                src="#"
                alt="#"
            />
            <p className={styles.temp}>
                {tempmax}°/{tempmin}°
            </p>
        </div>
    );
};
