import styles from './Container.module.scss'

const Container = ({ children }) => {
	return <div className={styles.Grid}>{children}</div>
}

export default Container
