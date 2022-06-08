import { useEffect, useState } from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import Aside from './shared/aside';
import { NavLink } from 'react-router-dom';
import { fetchUserProfile } from '../scripts/fetchSpotify';

interface IProfileInfo {
    displayName: string | null;
    country: string | null;
    email: string | null;
    followers: {
        href: string;
        total: number;
    } | null;
}

function Profile() {
    const [profile, setProfile] = useState({} as IProfileInfo)

    useEffect(() => {
        const doFetch = async () => {
            await fetchUserProfile().then(profileData => setProfile(profileData));
        }
        doFetch();
    }, []); 
            
    return (
        <div className="app">
            <Header/>
            <Aside />
            {profile.displayName !== null ? (
                <div className="profile">
                    <div className="profile__header">
                        <h1 className="profile__acc-title content__title">Аккаунт</h1>
                        <img className="profile__img" src="assets/images/tracks/Eminem_Curtain_call.jpg"/>
                        <h2 className="profile__prof-title page-title">Профиль:</h2>
                    </div>
                    <div className="profile__info">
                        <div className="info__line">
                            <div className="line__key">Имя пользователя:</div>
                            <div className="line__value">Yaroslav</div>
                        </div>
                        <div className="info__line">
                            <div className="line__key">Элеткронная почта:</div>
                            <div className="line__value">{profile.email}</div>
                        </div>
                        <div className="info__line">
                            <div className="line__key">Страна или регион:</div>
                            <div className="line__value">{profile.country}</div>
                        </div>
                        <div className="info__line">
                            <div className="line__key">Количество фолловеров:</div>
                            <div className="line__value">{profile.followers?.total}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="content">
                    <div className="content__error-title">
                        Ошибка получения токена. Нажмите <NavLink to="/" className='content__error-auth-link'><p>сюда</p></NavLink>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
   );
 }

 export default Profile;