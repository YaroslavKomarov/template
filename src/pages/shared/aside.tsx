import React from 'react';
import { NavLink } from 'react-router-dom';

function Aside() {
    return (
        <aside className="accordion">
                <div className="accordion__title">РАЗДЕЛЫ</div>
                <ul className="tags">
                    <li className="tag">
                        <NavLink to="/" className="tag__link link">Главная</NavLink>
                    </li>
                    <li className="tag">
                        <NavLink to="/mediateka" className="tag__link link">Медиатека</NavLink>
                    </li>
                    <li className="tag">
                        <NavLink to="/favoriteTracks" className="tag__link link">Любимые треки</NavLink>
                    </li>
                </ul>
        </aside>
    );
}

export default Aside;