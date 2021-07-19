import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { SiGithub } from 'react-icons/si'
import { FiSun, FiMoon } from 'react-icons/fi'

import TTheme from '../../actions/theme'

import HeaderLink from '../common/HeaderLink'

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
                <div className='links' style={{ padding: '10px' }}>
                    <HeaderLink to='/about' style={{ fontSize: '20px' }} >About Me</HeaderLink>
                </div>
            </div>
            {/* <a className='org' href={profileState.profile.organization}>Organization</a>  */}
            <div className='git'>
                {profileState.profile.organization ? <HeaderLink to={profileState.profile.organization} >Organization</HeaderLink> : <></>}
                <a href={profileState.profile.github}><SiGithub /></a>
            </div>

            <div className={'toggle-theme ' + themeState.theme} onClick={() => {dispatch(TTheme(true));}}>
                {themeState.theme === 'light'? <FiMoon /> : <FiSun />}
            </div>
        </div>
    )
}

export default Header
