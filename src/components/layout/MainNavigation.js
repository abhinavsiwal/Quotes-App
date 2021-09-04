import {NavLink} from 'react-router-dom'
import style from './MainNavigation.module.css';

const MainNavigation=()=>{
    return(
        <header className={style.header}>
            <div className={style.logo}>Abhi Quotes</div>
            <nav className={style.nav}>
                <ul>
                    <li><NavLink to="/quotes" activeClassName={style.active}>All Quotes</NavLink></li>                    
                    <li><NavLink to="/new-quote" activeClassName={style.active}>Add Quote</NavLink></li>                    
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;