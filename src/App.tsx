import styles from './App.module.scss';
import { Logo } from './components/Logo/Logo';
import { Button } from './ui/Button/Button';

function App() {
    return (
        <main className={styles.main}>
            <Logo />
            <Button appearance="primary">Button</Button>
            <br />
            <br />
            <Button appearance="secondary">Button</Button>
        </main>
    );
}

export default App;
