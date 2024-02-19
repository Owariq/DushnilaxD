import styles from './SidebarLogo.module.css';

export function SidebarLogo() {
    return (
        <div className={styles['container']}>
            <img className={styles['logo']} src='/Logo.svg' alt='Логотип' />
        </div>
    );
}
