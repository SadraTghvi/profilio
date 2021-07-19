import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import { FcNext, FcPrevious } from 'react-icons/fc'

const Arrow = ({ className, style, onClick }) => {
    let icon = null;
    let pos = null;

    if (className.search('slick-next') !== -1) {
        icon = <FcNext />;
        pos = 'next'
    } else {
        icon = <FcPrevious />;
        pos = 'previous'
    }

    return (
        <div className={'arrow-custom ' + pos} onClick={onClick} >
            {icon}
        </div>
    )
}

const Projects = () => {
    const projectsState = useSelector((state) => state.projects);

    if (projectsState.projects.length < 1) return <></>

    let projs = projectsState.projects.map((l, idx) => 
        <div className='projs-pad' key={idx}>
            <div className='projs-item'>
                <div className='img' style={{ '--img-bg' : `url(${l.img})` }} />
                <span>{l.name}</span>
                <p>{l.description}</p>
            </div>
        </div>
    );

    
    let slidesToShow = (projectsState.projects.length < 5 ? projectsState.projects.length : 5);
    

    const settings = {
        infinite: true,
        centerPadding: "60px",
        slidesToShow: slidesToShow,
        swipeToSlide: true,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: slidesToShow > 4 ? 4 : slidesToShow,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: slidesToShow > 3 ? 3 : slidesToShow,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: slidesToShow > 2 ? 2 : slidesToShow,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className='projects'>
            <span className='t'>Projects</span>
            <div className='projer'>
                <div className='projlist'>
                <Slider {...settings}> {projs} </Slider>
                    
                </div>
            </div>
        </div>
    )
}

export default Projects
