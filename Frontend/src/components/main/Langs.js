import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import SlideShow from '../common/SlideShow'

import './sass/langs.scss'


const Langs = () => {
    const langsState = useSelector((state) => state.langs);

    if (langsState.langs.length < 1) return <></>

    const languages = langsState.langs.map((l, idx) => 
        <div className='pad' key={idx}>
            <div className='item'>
                <div className='img' style={{ backgroundImage : `url(${l.img})` }} />
                <span>{l.name}</span>
                <p>{l.description}</p>
            </div>
        </div>
    );

    const slidesToShow = (langsState.langs.length < 5 ? langsState.langs.length : 5);
    
    return (
        <div className='langs'>
            <span className='title'>Languages</span>
            <div className='slide-base'>
                <div style={{ width: '90%' }}>
                    <SlideShow slidesToShow={slidesToShow}> {languages} </SlideShow>
                </div>
            </div>
        </div>
    )
}

export default Langs
