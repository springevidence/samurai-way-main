import React from 'react';
import {UserType} from "../../redux/store";

export type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}
export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([{id: 1, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Duser%2BAvatar&psig=AOvVaw2-gpBHIw62h92Tw3geW5_O&ust=1689856696244000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD5yfLkmoADFQAAAAAdAAAAABAE', followed: true, fullName: "Nikolay", status: "sleeping", location: {city: "Minsk", country: "Belarus"}},
            {id: 2, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Duser%2BAvatar&psig=AOvVaw2-gpBHIw62h92Tw3geW5_O&ust=1689856696244000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD5yfLkmoADFQAAAAAdAAAAABAE',followed: false, fullName: "John", status: "eating", location: {city: "Rostov-on-Don", country: "Russia"}},
            {id: 3, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Duser%2BAvatar&psig=AOvVaw2-gpBHIw62h92Tw3geW5_O&ust=1689856696244000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD5yfLkmoADFQAAAAAdAAAAABAE',followed: true, fullName: "Jack", status: "working", location: {city: "New York", country: "USA"}},
            {id: 4, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Duser%2BAvatar&psig=AOvVaw2-gpBHIw62h92Tw3geW5_O&ust=1689856696244000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD5yfLkmoADFQAAAAAdAAAAABAE',followed: true, fullName: "Vladimir", status: "driving", location: {city: "Moscow", country: "Russia"}}])
    }
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id)}
                        }>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
        }
    </div>
};
