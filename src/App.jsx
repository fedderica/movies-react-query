import { MoviesGrid } from "./components/MoviesGrid";
//import movies from "../movies.json";
import styles from  "./App.module.css";
import { BrowserRouter as Router, Routes,  Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage"


export function App() {
    return (

    <Router>
        <header>
            <Link to="/">
                <h1 className={styles.title}>Movies</h1>
                </Link>
    </header>
        <main>
            <Routes>
                <Route exact path="/movie"> 
                <MovieDetails/> 
                </Route>
                <Route  path="/"> 
                <LandingPage/> 
                </Route>
             </Routes>
        </main>
        </Router>
       
    );
};

//Si yo selecciono F2 cambio el nombre de los componentes en todos sus espacios
//React puede crear interfaces de usuario de forma reutilizable
//este es mi componente
