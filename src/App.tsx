import styles from './App.module.scss';
import Img from './berlin.jpg';
import { AddTrip } from './components/AddTrip/AddTrip';
import { ConfirmModal } from './components/ConfirmModal/ConfirmModal';
import { Logo } from './components/Logo/Logo';
import { TodayForecast } from './components/TodayForecast/TodayForecast';
import { TripCard } from './components/TripCard/TripCard';
import { TripForecast } from './components/WeekForecast/TripForecast';
import { useModal } from './hooks/useModal';
import { useInput } from './hooks/useInput';
import { useTripStore } from './stores/tripStore';
import { DateInput } from './ui/DateInput/DateInput';
import { Select } from './ui/Select/Select';
import { AddTripForm } from './components/AddTripForm/AddTripForm';

function App() {
    const currentTrip = useTripStore((state) => state.currentTrip);
    const { close, show, visible } = useModal();

    return (
        <main className={styles.main}>
            <div className={styles.trip}>
                <Logo />
                <div className={styles.trips}>
                    <TripCard
                        currentTrip={currentTrip}
                        src={Img}
                    />
                    <AddTrip onClick={show} />
                </div>
                {visible && (
                    <ConfirmModal
                        onClose={close}
                        onSubmit={close}
                    >
                        <AddTripForm />
                    </ConfirmModal>
                )}
                <TripForecast />
            </div>
            <TodayForecast />
        </main>
    );
}

export default App;
