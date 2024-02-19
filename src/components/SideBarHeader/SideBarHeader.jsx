import { useSelector } from 'react-redux';
import styles from './SideBarHeader.module.css';
import cn from 'classnames';

export function SideBarHeader() {
    const isNormal = useSelector((s) => s.theme.isNormal);
    const temperature = useSelector((s) => s.theme.indicators);
    const happyOrNot = isNormal
        ? 'Душнила вами доволен'
        : 'Душнила не доволен вами';

    const normalTest = (temp, co2) => {
        if (temp > 27 && co2 > 800) {
            return 'Температура и CO2 превышают норму';
        }
        if (temp > 27) {
            return 'Температура превышает норму';
        }
        if (co2 > 800) {
            return 'CO2 превышает норму';
        }
    };

    return (
        <div
            className={cn(
                isNormal ? styles['container'] : styles['notNormalContainer']
            )}
        >
            <div>
                <h1 className={styles['main-text']}>{happyOrNot}</h1>
            </div>
            <div>
                <h2 className={styles['secondary-text']}>
                    {isNormal
                        ? 'Все показатели в норме'
                        : normalTest(temperature.temp, temperature.co2)}
                </h2>
            </div>
        </div>
    );
}
