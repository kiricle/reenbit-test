import styles from './App.module.scss';
import { AddTrip } from './components/AddTrip/AddTrip';
import { AddTripForm } from './components/AddTripForm/AddTripForm';
import { Logo } from './components/Logo/Logo';
import { TodayForecast } from './components/TodayForecast/TodayForecast';
import { TripCard } from './components/TripCard/TripCard';
import { TripForecast } from './components/WeekForecast/TripForecast';
import { useModal } from './hooks/useModal';
import { useTripStore } from './stores/tripStore';

function App() {
    const { close, show, visible } = useModal();
    const userTrips = useTripStore((state) => state.userTrips);

    userTrips.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

    return (
        <main className={styles.main}>
            <div className={styles.trip}>
                <Logo />
                <div className={styles.trips}>
                    {userTrips.map((trip, index) => (
                        <TripCard
                            key={index}
                            trip={trip}
                        />
                    ))}
                    <AddTrip onClick={show} />
                </div>

                <AddTripForm
                    visible={visible}
                    close={close}
                />

                <TripForecast />
            </div>
            <TodayForecast />
        </main>
    );
}

export default App;
