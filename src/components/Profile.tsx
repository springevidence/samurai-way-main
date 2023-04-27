import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://images.all-free-download.com/images/graphiclarge/beach_cloud_dawn_horizon_horizontal_landscape_ocean_601821.jpg" alt="sky"/>
            </div>
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div className={s.item}>
                Post 1
            </div>
            <div className={s.item}>
                Post 2
            </div>
        </div>
    );
};

export default Profile;