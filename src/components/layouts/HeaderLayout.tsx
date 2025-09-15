import styles from './HeaderLayout.module.css'

function HeaderLayout({children}: {children: React.ReactNode}) {
    return(
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <div className={styles.searchContainer}>
                    <div className={styles.searchButton}>
                        <button>
                            <span>🔍</span>
                        </button>
                    </div>
                    <div className={styles.searchBox}>
                        <input id="searchId" className={styles.searchInput} placeholder='Search...' />
                        <span className={styles.clearButton}>X</span>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default HeaderLayout
