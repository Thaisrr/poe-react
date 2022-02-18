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
            <li>
                <NavLink to="/hooks">Hooks</NavLink>
            </li>
            <li>
                <NavLink to="/props">Props</NavLink>
            </li>
            <li>
                <NavLink to="/nimportequoi">404</NavLink>
            </li>
            <li>
                <NavLink to="/effect">Effect</NavLink>
            </li>
            <li>
                <NavLink to="/requests">Request</NavLink>
            </li>
            <li>
                <NavLink to="/forms">Forms</NavLink>
            </li>
        </ul>
    </nav>

);


export default Navigation;
