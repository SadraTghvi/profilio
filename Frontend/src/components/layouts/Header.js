import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { SiGithub } from 'react-icons/si'
import { FiSun, FiMoon } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import TTheme from '../../redux/actions/theme'

import HeaderLink from '../common/HeaderLink'

import './sass/header.scss'

const Header = () => {
    const dispatch = useDispatch();
    const themeState = useSelector((state) => state.theme);
    const profileState = useSelector((state) => state.profile);

    if (!profileState.profile) return <></>

    return (
        <div className='header-container'>
            <div className='header-navbar'>
                <div className='info'>
                    <Link to='/'>
                        <div style={{ cursor: 'pointer' }}>
                            <img src={profileState.profile.img} />
                            <span>{profileState.profile.name}</span>
                        </div>
                    </Link>
                    <div className='links' style={{ padding: '10px' }}>
                        <HeaderLink to='/about' style={{ fontSize: '20px' }} >About Me</HeaderLink>
                    </div>
                </div>
                {/* <a className='org' href={profileState.profile.organization}>Organization</a>  */}
                <div className='git'>
                    {profileState.profile.organization ? <HeaderLink to={profileState.profile.organization} externalLink={true} >Organization</HeaderLink> : <></>}
                    <a href={profileState.profile.github}><SiGithub /></a>
                </div>

                <div className={'toggle-theme ' + themeState.theme} onClick={() => {dispatch(TTheme(true));}}>
                    {themeState.theme === 'light'? <FiMoon /> : <FiSun />}
                </div>
            </div>
        </div>
    )
}

export default Header
