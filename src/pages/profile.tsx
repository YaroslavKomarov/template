import { fetchUserProfile } from '../scripts/fetchSpotify';
import { useEffect, useState } from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import Aside from './shared/aside';
import LoadingPage from './loading';

interface IProfileInfo {
    displayName: string;
    country: string;
    email: string;
    followers: {
        href: string;
        total: number;
    };
}

function Profile() {
    const [profile, setProfile] = useState<IProfileInfo | null>(null);

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
            {profile ? (
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
                <LoadingPage />
            )}
            <Footer/>
        </div>
   );
 }

 export default Profile;