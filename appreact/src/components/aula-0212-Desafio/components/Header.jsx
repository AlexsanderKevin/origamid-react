import React from "react";
import { title } from "../styles/styles";

const Header =  () => {
    const routes = [
        { routeName: 'Home', path: '/' },
        { routeName: 'Produtos', path: '/produtos' }
    ]

    const view = window.location.href.endsWith('/produtos') ? 'Produtos' : 'Home'

    return (
        <>
        <ul>
            {routes.map( ({routeName, path}) => (
                <li key={routeName}>
                    <a href={ path }>{ routeName }</a>
                </li>
            ))}
        </ul>
        <h1 style={ title }>{ view }</h1>
        </>
    );
}

export default Header;
