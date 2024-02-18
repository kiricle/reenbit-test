import styles from './App.module.scss';
import { Logo } from './components/Logo/Logo';
import { TripCard } from './components/TripCard/TripCard';
import { Button } from './ui/Button/Button';
import Img from './berlin.jpg';

function App() {
    return (
        <main className={styles.main}>
            <Logo />
            <Button appearance="primary">Button</Button>
            <br />
            <br />
            <Button appearance="secondary">Button</Button>
            <TripCard
                city="Berlin"
                src={Img}
                start_date={new Date()}
                end_date={new Date()}
            />
        </main>
    );
}

export default App;
