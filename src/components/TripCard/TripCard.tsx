import styles from './TripCard.module.scss';

export const TripCard = ({
    src,
    city,
    start_date,
    end_date,
}: {
    src: string;
    city: string;
    start_date: Date;
    end_date: Date;
}) => {

    const formatDate = (date: Date): string => {
        const yyyy = date.getFullYear();
        const mm = "0" + date.getMonth() + 1;
        const dd = "0" + date.getDate();

        return `${dd.slice(-2)}.${mm.slice(-2)}.${yyyy}`;
    }

    return (
        <div className={styles.card}>
            <img
                className={styles.img}
                src={src}
                alt="some alt"
            />
            <div className={styles.content}>
                <h3 className={styles.name}>{city}</h3>
                <p className={styles.date}>{formatDate(start_date)} - {formatDate(end_date)}</p>
            </div>
        </div>
    );
};

// TripCard {import.meta.env.VITE_API_KEY}
