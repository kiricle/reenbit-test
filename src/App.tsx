import styles from './App.module.scss';
import { Logo } from './components/Logo/Logo';
import { TripCard } from './components/TripCard/TripCard';
import { Button } from './ui/Button/Button';
import Img from './berlin.jpg';
import { useTripStore } from './stores/tripStore';
import { TodayForecast } from './components/TodayForecast/TodayForecast';
import { ConfirmModal } from './components/ConfirmModal/ConfirmModal';
import { useModal } from './hooks/useModal';

function App() {
    const currentTrip = useTripStore((state) => state.currentTrip);
    const { close, show, visible } = useModal();

    return (
        <main className={styles.main}>
            <div>
                <Logo />
                <Button
                    appearance="primary"
                    onClick={show}
                >
                    Open
                </Button>
                {visible && (
                    <ConfirmModal
                        onClose={close}
                        onSubmit={() => console.log(123)}
                    >
                        <h2>Help me, please</h2>
                    </ConfirmModal>
                )}
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
