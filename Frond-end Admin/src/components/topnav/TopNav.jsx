import React from 'react'

import './topnav.css'

import { Link, useHistory } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import notifications from '../../assets/JsonData/notification.json'

import user_image from '../../assets/images/avatar.png'

import user_menu from '../../assets/JsonData/user_menus.json'

const curr_user = JSON.parse(localStorage.getItem("userinfor"))

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    // console.log(index);
    <Link to={`${item.Link}`} key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {
    const history = useHistory()
    const handleLogout = () => {
        localStorage.removeItem("userinfor")
        history.replace("/login")
    }
    return (
        <div className='topnav'>

            <div className="topnav__right">
                <div class="dropdown show">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {curr_user.data.usersName}
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">View Profile</a>
                        <button onClick={() => handleLogout()} class="dropdown-item">Logout</button>
                    </div>
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu />
                </div>
            </div>
        </div>
    )
}

export default Topnav
