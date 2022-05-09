import React from 'react';

function Footer() {
    return (
        <footer className="footer">
			<nav className="footer__navigation">
				<i className="fa fa-code footer__code"></i>
				<a 
					href="https://web.telegram.org/" 
					target="_blank"
					rel="noopener"
					className="link footer__link">Telegram</a>
				<a 
					href="https://github.com/"
					target="_blank"
					rel="noopener"
                    className="link footer__link">GitHub</a>
			</nav>
			<p className="footer__company">© 2022 Spotify AB</p>
		</footer>
    );
}

export default Footer;