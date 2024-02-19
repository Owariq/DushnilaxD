import styles from './App.module.css';
import { SideBarHeader } from './components/SideBarHeader/SideBarHeader';
import { SideBarHistory } from './components/SideBarHistory/SideBarHistory';
import { SidebarLogo } from './components/SidebarLogo/SidebarLogo';
import { TemperatureIndicator } from './components/TemperatureIndicator/TemperatureIndicator';

function App() {
    return (
        <div>
            <h1 className={styles['name']}>ДУШНИЛА</h1>
            <div className={styles['container']}>
                <div className={styles['side-bar']}>
                    <div className={styles['side-bar-header']}>
                        <SideBarHeader />
                        <div className={styles['side-bar-content']}>
                            <SideBarHistory />
                            <SidebarLogo />
                        </div>
                    </div>
                </div>
                <div>
                    <TemperatureIndicator />
                </div>
            </div>
        </div>
    );
}

export default App;
