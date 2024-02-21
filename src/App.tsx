import styles from './App.module.scss';
import Img from './berlin.jpg';
import { AddTrip } from './components/AddTrip/AddTrip';
import { ConfirmModal } from './components/ConfirmModal/ConfirmModal';
import { Logo } from './components/Logo/Logo';
import { TodayForecast } from './components/TodayForecast/TodayForecast';
import { TripCard } from './components/TripCard/TripCard';
import { TripForecast } from './components/WeekForecast/TripForecast';
import { useModal } from './hooks/useModal';
import { useSelect } from './hooks/useSelect';
import { useTripStore } from './stores/tripStore';
import { Select } from './ui/Select/Select';

function App() {
    const currentTrip = useTripStore((state) => state.currentTrip);
    const { close, show, visible } = useModal();
    const { onChange, selected } = useSelect('Please select a city');

    console.log(selected)

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
                        <Select
                            onChange={onChange}
                            options={[
                                { title: 'Berlin', value: 'Berlin' },
                                { title: 'Dnipro', value: 'Dnipro' },
                            ]}
                            placeholder="Please select a city"
                            label="Email"
                        />
                    </ConfirmModal>
                )}
                <TripForecast />
            </div>
            <TodayForecast />
        </main>
    );
}

export default App;
