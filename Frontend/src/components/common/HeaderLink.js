import React from 'react'

import './sass/headerlink.scss'

const HeaderLink = ({ to, children, style }) => {
    return (
        <>
            <a className='header-link' href={to} style={style}>{children}</a>
        </>
    )
}

HeaderLink.defaultProps = {
    to: '',
    children: '',
    style: {},
}

export default HeaderLink
