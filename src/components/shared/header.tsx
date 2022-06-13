import React, { useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';

function Header() {
	const [isQueryEnter, setIsQueryEnter] = useState<boolean>(false);
	const [query, setQuery] = useState<string | undefined>(undefined);

	const handleKeypress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			setIsQueryEnter(true);
		}
	};

	if (isQueryEnter && query) {
		return (
			<Navigate to='/searchResult' state={{query: query}}/>
		);
	}
    return(
        <header className="header">
			<NavLink to="/" className="header__home-link link">
				<img src="/assets/images/spotify-logo.png" alt="spotify logo" height="36" />
				<h1 className="header__title spoti">Spoti</h1>
				<h1 className="header__title clone">Clone</h1>
			</NavLink>
			<div className="header__right-wrap">
				<div className="header__search-form">
					<input 
						className="header__search" 
						type="text" 
						placeholder="Исполнитель, трек или подкаст"
						onChange={event => setQuery(event.target.value)}
						onKeyPress={handleKeypress} />
					<button 
						className="header__search-btn btn">
					</button>
				</div> 
				<NavLink to="/profile" className="header__user-link link">
					<i className="fa fa-user-circle"></i>
				</NavLink>
			</div>
		</header>
    );
}

export default Header;