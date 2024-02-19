import styles from './TripCard.module.scss';

export const TripCard = ({
    currentTrip,
    src,
}: {
    src: string;
    currentTrip: Trip;
}) => {
    const formatDate = (date: Date): string => {
        const yyyy = date.getFullYear();
        const mm = '0' + (date.getMonth() + 1);
        const dd = '0' + date.getDate();

        return `${dd.slice(-2)}.${mm.slice(-2)}.${yyyy}`;
    };

    return (
        <div className={styles.card}>
            <img
                className={styles.img}
                src={src}
                alt="some alt"
            />
            <div className={styles.content}>
                <h3 className={styles.name}>{currentTrip.city}</h3>
                <p className={styles.date}>
                    {formatDate(currentTrip.startDate)} -{' '}
                    {formatDate(currentTrip.endDate)}
                </p>
            </div>
        </div>
    );
};
