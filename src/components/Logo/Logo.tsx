import styles from './Logo.module.scss';

export const Logo = () => {
    return (
        <h1 className={styles.logo}>
            Weather <span className={styles.bold}>Forecast</span>
        </h1>
    );
};
