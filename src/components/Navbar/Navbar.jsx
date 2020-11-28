import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friend from './Friends/Friend'

const Nav = props => {
  let friend = props.state.friends.map(f => <Friend key={f.id} name={f.name} />)

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='dialogs' activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='users' activeClassName={s.active}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='news' activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='music' activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='settings' activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <div className={s.friends}>
        <p className={s.header}>Friends</p>
        {friend}
      </div>
    </nav>
  )
}

export default Nav
