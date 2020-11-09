import React from 'react'
import s from './Users.module.css'
import axios from 'axios'
import userIcon from '../../assets/img/user-icon.jpg'

class Users extends React.Component {
  constructor (props) {
    super(props)
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => {
        this.props.setUsers(res.data.items)
      })
  }

  render () {
    return (
      <div>
        {this.props.users.map(u => (
          <div key={u.id}>
            <div>
              <img
                src={u.photos.small ? u.photos.small : userIcon}
                alt='avatar'
                className={s.avatar}
              />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => this.props.unfollow(u.id)}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
            <div>
              {u.name}
              {u.status}
              {/* {u.location.city}
                {u.location.country} */}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Users
