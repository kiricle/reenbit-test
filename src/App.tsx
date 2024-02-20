import styles from './App.module.scss';
import Img from './berlin.jpg';
import { Logo } from './components/Logo/Logo';
import { TodayForecast } from './components/TodayForecast/TodayForecast';
import { TripCard } from './components/TripCard/TripCard';
import { TripForecast } from './components/WeekForecast/TripForecast';
import { useTripStore } from './stores/tripStore';

function App() {
    const currentTrip = useTripStore((state) => state.currentTrip);

    return (
        <main className={styles.main}>
            <div className={styles.trip}>
                <Logo />
                <TripCard
                    currentTrip={currentTrip}
                    src={Img}
                />
                <TripForecast />
            </div>
            <TodayForecast />
        </main>
    );
}

export default App;
