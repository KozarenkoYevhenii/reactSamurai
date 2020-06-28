import React from 'react'
import s from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([{
            id: '1', image: 'https://sfw.so/uploads/posts/2009-12/1261379574_avatar_1002.jpg',
            follow: true, name: 'Petia', status: 'Looking for a job', location: { country: 'Ukraine', city: 'Lviv' }
        },
        {
            id: '2', image: 'https://sfw.so/uploads/posts/2009-12/1261379574_avatar_1002.jpg',
            follow: false, name: 'Vasia', status: 'Looking for a job', location: { country: 'Ukraine', city: 'Lviv' }
        },
        {
            id: '3', image: 'https://sfw.so/uploads/posts/2009-12/1261379574_avatar_1002.jpg',
            follow: true, name: 'Dima', status: 'Looking for a job', location: { country: 'Ukraine', city: 'Lviv' }
        }])
    }

    return (<div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.image} alt="avatar" className={s.avatar} />
                </div>
                <div>
                    {u.follow ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>}
                </div>
                <div>
                    {u.name}
                    {u.status}
                    {u.location.city}
                    {u.location.country}
                </div>
            </div>)
        }
    </div>
    )
}

export default Users