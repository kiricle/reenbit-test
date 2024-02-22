import { useTripStore } from '../../stores/tripStore';
import { formateDate } from '../../utils/formateDate';
import { isSelected } from '../../utils/isSelected';
import styles from './TripCard.module.scss';

export const TripCard = ({ trip }: { trip: Trip & City }) => {
    const currentTrip = useTripStore((state) => state.currentTrip);
    const setCurrentTrip = useTripStore((state) => state.setTrip);

    const selected = isSelected(trip, currentTrip);

    return (
        <div
            className={styles.card}
            onClick={() => setCurrentTrip(trip)}
        >
            <img
                className={styles.img}
                src={trip.src}
                alt="some alt"
            />
            <div
                className={[
                    styles.content,
                    selected ? styles.selected : '',
                ].join(' ')}
            >
                <h3 className={styles.name}>{trip.city}</h3>
                <p className={styles.date}>
                    {formateDate(trip.startDate)} - {formateDate(trip.endDate)}
                </p>
            </div>
        </div>
    );
};
