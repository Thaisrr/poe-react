import { NavLink } from "react-router-dom";
import '../style/Navigation.css';

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Présentation</NavLink>
            </li>
            <li>
                <NavLink to="/routing">Routage</NavLink>
            </li>
            <li>
                <NavLink to="/static">Static</NavLink>
            </li>
        </ul>
    </nav>

);


export default Navigation;