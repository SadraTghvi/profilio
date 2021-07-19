import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import SlideShow from '../common/SlideShow'

import './sass/projects.scss'


const Projects = () => {
    const projectsState = useSelector((state) => state.projects);

    if (projectsState.projects.length < 1) return <></>

    const pads = projectsState.projects.map((l, idx) => 
        <div className='pad' key={idx}>
            <div className='item'>
                <div className='img' style={{ backgroundImage : `url(${l.img})` }} />
                <span>{l.name}</span>
                <p>{l.description}</p>
            </div>
        </div>
    );

    const slidesToShow = (projectsState.projects.length < 5 ? projectsState.projects.length : 5);
    
    return (
        <div className='projects'>
            <span className='title'>Projects</span>
            <div className='slide-base'>
                <div style={{ width: '90%' }}>
                    <SlideShow slidesToShow={slidesToShow}> {pads} </SlideShow>
                </div>
            </div>
        </div>
    )
}

export default Projects
