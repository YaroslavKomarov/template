import React from 'react';

function Footer() {
    return (
        <footer className="footer">
			<nav className="footer__navigation">
				<i className="fa fa-code"></i>
				<a 
					href="https://web.telegram.org/" 
					target="_blank"
					rel="noopener"
					className="link">Telegram</a>
				<a 
					href="https://github.com/"
					target="_blank"
					rel="noopener"
                    className="link">GitHub</a>
			</nav>
			<p>© 2022 Spotify AB</p>
		</footer>
    );
}

export default Footer;