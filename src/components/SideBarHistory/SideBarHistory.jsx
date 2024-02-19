import styles from './SideBarHistory.module.css';

const ARROW_SVG = (
    <svg
        width='24'
        height='15'
        viewBox='0 0 24 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M22.5 7.25213L16.6667 1.41879M22.5 7.25213L16.6667 13.0855M22.5 7.25213H1.5'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

const randomaizer = Math.round(Math.random(0, 99) * 100);

export function SideBarHistory() {
    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                <h1 className={styles['main-text']}>
                    Дней без душноты {randomaizer}
                </h1>
            </div>
            <div className={styles['footer']}>
                <button className={styles['history-button']}>
                    История
                    {ARROW_SVG}
                </button>
            </div>
        </div>
    );
}
