import React from 'react'
import { Link } from 'react-router-dom'

import './sass/headerlink.scss'

const HeaderLink = ({ to, children, style, externalLink }) => {
    if (externalLink) {
        return <a className='header-link' href={to} style={style}>{children}</a>
    } else {
        return <Link className='header-link' to={to} style={style}>{children}</Link>
    }
}

HeaderLink.defaultProps = {
    to: '',
    children: '',
    style: {},
    externalLink: false,
}

export default HeaderLink
