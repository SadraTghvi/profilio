import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { SiGithub } from 'react-icons/si'
import { FiSun, FiMoon } from 'react-icons/fi'

import TTheme from '../../actions/theme'

const Header = () => {
    const dispatch = useDispatch();
    const themeState = useSelector((state) => state.theme);
    const profileState = useSelector((state) => state.profile);

    if (!profileState.profile) return <></>

    return (
        <div className='header-navbar'>
            <div className='info'>
                <img src={profileState.profile.img} />
                <span>{profileState.profile.name}</span>
            </div>
            <div className='git'>
                {profileState.profile.organization ? <a className='org' href={profileState.profile.organization}>Organization</a> : <></>}
                <a href={profileState.profile.github}><SiGithub /></a>
            </div>

            <div className={'toggle-theme ' + themeState.theme} onClick={() => {dispatch(TTheme(true));}}>
                {themeState.theme === 'light'? <FiMoon /> : <FiSun />}
            </div>
        </div>
    )
}

export default Header
