import { IProfile } from '../scripts/commonSpotifyInterfaces';
import { fetchUserProfile } from '../scripts/fetchSpotify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import Aside from '../components/shared/aside';
import LoadingPage from './loading';

function Profile() {
    const [profile, setProfile] = useState<IProfile | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserProfile().then(profileData => setProfile(profileData));
    }, []); 
            
    return (
        <div className="app">
            <Header/>
            <Aside />
            {profile ? (
                <div className="profile">
                    <div className="profile__header">
                        <button onClick={() => navigate(-1)} className="playlist__back-btn btn">
                            <i className="fa fa-angle-left"></i>
                        </button>
                        <img className="profile__img" src={profile.images?.length > 0 ? profile.images[0].url : "assets/images/default-profile.jpg"}/>
                        <h2 className="profile__name page-title">{profile.display_name}</h2>
                    </div>
                    <div className="profile__info">
                        <div className="info__line">
                            <div className="line__key">Имя пользователя:</div>
                            <div className="line__value">{profile.display_name}</div>
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