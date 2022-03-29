import React from 'react';
import { NavLink } from 'react-router-dom';

function Aside() {
    return (
        <aside className="accordion">
                <div className="accordion__title">РАЗДЕЛЫ</div>
                <ul className="tags">
                    <li className="tag">
                        <a href="/" className="tag__link link">Главная</a>
                    </li>
                    <li className="tag">
                        <a href="/" className="tag__link link">Медиатека</a>
                    </li>
                    <li className="tag">
                        <a href="/" className="tag__link link">Любимые треки</a>
                    </li>
                </ul>
        </aside>
    );
}

export default Aside;