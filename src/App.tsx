import styles from './App.module.scss';
import { Logo } from './components/Logo/Logo';
import { TripCard } from './components/TripCard/TripCard';
import { Button } from './ui/Button/Button';
import Img from './berlin.jpg';
import { useTripStore } from './stores/tripStore';
import { TodayForecast } from './components/TodayForecast/TodayForecast';

function App() {
    const currentTrip = useTripStore((state) => state.currentTrip);

    return (
        <main className={styles.main}>
            <div>
                <Logo />
                <Button
                    appearance="primary"
                    // onClick={() => setTrip('Berlin')}
                >
                    Button
                </Button>
                <br />
                <br />
                <Button
                    appearance="secondary"
                    // onClick={() => setTrip('Dnipro')}
                >
                    Button
                </Button>
                <TripCard
                    currentTrip={currentTrip}
                    src={Img}
                />
            </div>
            <TodayForecast />
        </main>
    );
}

export default App;
