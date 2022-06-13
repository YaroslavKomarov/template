import { CODE_URL } from "./auth";

export default function Login() {
    return (
        <div className="app">
            <div className="authorization">
                <img className="authorization__img" src="assets/images/spotify-logo-login.png"></img>
                <a href={CODE_URL} className="authorization__login-link">Log in Spotify</a>
            </div>
        </div>
    );
}
