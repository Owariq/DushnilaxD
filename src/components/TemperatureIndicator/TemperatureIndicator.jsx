import styles from './TemperatureIndicator.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../store/theme.slice';
import { useEffect } from 'react';
import cn from 'classnames';

export function TemperatureIndicator() {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(function call() {
            dispatch(changeTheme());
            setTimeout(call, 60000);
        });
    }, [dispatch]);

    const temperature = useSelector((s) => s.theme.indicators);
    const isNormal = useSelector((s) => s.theme.isNormal);

    return (
        <div
            className={cn(
                isNormal ? styles['container'] : styles['notNormalContainer']
            )}
        >
            <div className={styles['indicators']}>
                <div className={styles['first-indicator']}>
                    <h1>{Math.round(temperature.temp * 10) / 10}℃</h1>
                    <h3>Температура</h3>
                </div>
                <div className={styles['second-indicator']}>
                    <h1>{Math.round(temperature.co2)}ppm</h1>
                    <h3>CO2</h3>
                </div>
            </div>
        </div>
    );
}
