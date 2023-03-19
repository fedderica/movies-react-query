import styles from "./Search.module.css"

export function Search() {
    return (
        <form className={styles.searchContainer}>
            <div className={styles.searchBox}> 
                <input className={styles.searchInput}  type="text" />
                <button className={styles.searchButton}  type="submit"> Buscar </button>
           </div>
            </form>  
    );
    }

//input siempre dentro de un formulario
//Cuando importamos stylos de esta manera en clases, debemos hacer destructuring + .nombredelaclase