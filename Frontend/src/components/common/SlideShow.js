import React from 'react'
import Slider from 'react-slick'
import { FcNext, FcPrevious } from 'react-icons/fc'

import './sass/slideshow.scss'


const Arrow = ({ className, onClick }) => {
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

const SlideShow = ({ children, slidesToShow }) => {

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
        <div className='slides-container'>
            <Slider {...settings}> {children} </Slider>
        </div>
    )
}

export default SlideShow
