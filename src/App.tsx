import styles from './App.module.scss';
import { Logo } from './components/Logo/Logo';
import { TripCard } from './components/TripCard/TripCard';
import { Button } from './ui/Button/Button';
import Img from './berlin.jpg';
import { useTripStore } from './stores/tripStore';

function App() {
    const currentTrip = useTripStore((state) => state.currentTrip);
    const setTrip = useTripStore((state) => state.setTrip);

    return (
        <main className={styles.main}>
            <Logo />
            <Button
                appearance="primary"
                onClick={() => setTrip('Berlin')}
            >
                Button
            </Button>
            <br />
            <br />
            <Button
                appearance="secondary"
                onClick={() => setTrip('Dnipro')}
            >
                Button
            </Button>
            <TripCard
                city={currentTrip}
                src={Img}
                start_date={new Date()}
                end_date={new Date()}
            />
        </main>
    );
}

export default App;
