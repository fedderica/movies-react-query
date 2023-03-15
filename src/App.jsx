import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css"

export function App() {
    return <div>
        <header>
            <h1 className={styles.title}>Movies</h1>
        </header>
        <main>
            <MoviesGrid /> 
        </main>
    </div>;
};

//Si yo selecciono F2 cambio el nombre de los componentes en todos sus espacios
//React puede crear interfaces de usuario de forma reutilizable
//este es mi componente
