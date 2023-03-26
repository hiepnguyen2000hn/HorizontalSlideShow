import React, {Component, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Card} from 'antd';

const {Meta} = Card;
const dataImg = [
    {
        id: 1,
        link: 'https://i.pinimg.com/564x/90/bd/fa/90bdfadb1ab1e3050407da6077805fcd.jpg',
        title: 'Lamboghini Huracan',
        linkDescription: 'https://www.lamborghini.com/en-en'
    },
    {
        id: 2,
        link: 'https://i.pinimg.com/564x/cd/7d/7b/cd7d7b16cff11cce7be668cb5f374acc.jpg',
        title: 'Ferrari Laferrari',
        linkDescription: 'https://www.ferrari.com/en-EN'
    },
    {
        id: 3,
        link: 'https://i.pinimg.com/564x/4e/dd/f1/4eddf1a4de5c94bcd2824c8adba9dd81.jpg',
        title: 'Porsche Taycan',
        linkDescription: 'https://www.porsche.com/middle-east/',
    },
    {
        id: 4,
        link: 'https://i.pinimg.com/564x/81/67/52/8167527e86d79f74d3185fd27d82ce23.jpg',
        title: 'Koenigsegg Regera',
        linkDescription: 'https://www.koenigsegg.com/'
    },
    {
        id: 5,
        link: 'https://i.pinimg.com/564x/83/21/f7/8321f7e585935a8c2b3276a52abf5f5f.jpg',
        title: 'Maserati Mc20',
        linkDescription: 'https://www.maserati.com/vn/vi'
    }
];

export default function Home() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);
    const [data, setData] = useState(dataImg);
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        centerPadding: '20%',
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    vertical: true,
                    verticalSwiping: true,
                }
            },
        ]
    };
    return (
        <>
            <div>
                <div className="slider-desktop">
                    <Slider
                        asNavFor={nav1}
                        ref={slider => setNav2(slider)}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        {...settings}
                        className="slider_dots"
                    >

                        <div>
                            <div className="slider_navigators"><img
                                src="https://i.pinimg.com/564x/d2/86/e1/d286e1a30989e32bae812909c9e82945.jpg"/></div>
                        </div>
                        <div>
                            <div className="slider_navigators"><img
                                src="https://i.pinimg.com/564x/e9/24/f9/e924f959e00c7a1a3db37a533a96c68c.jpg"/></div>
                        </div>
                        <div>
                            <div className="slider_navigators"><img
                                src="https://i.pinimg.com/564x/45/2b/cc/452bcc4fa854a568e39d66b64b83eab2.jpg"/></div>
                        </div>
                        <div>
                            <div className="slider_navigators"><img
                                src="https://i.pinimg.com/564x/04/08/41/04084148f12dd71d8444c6b2ed39393b.jpg"/></div>
                        </div>
                        <div>
                            <div className="slider_navigators"><img
                                src="https://i.pinimg.com/564x/6d/7c/2f/6d7c2f9ede35b9118312d00d36e7dfd5.jpg"/></div>
                        </div>
                    </Slider>
                    <Slider
                        asNavFor={nav2}
                        ref={slider => setNav1(slider)}
                        className="main_slider"
                    >
                        {
                            data.map(i => (
                                <div className="slide" key={i.id}>
                                    <Card
                                        hoverable
                                        cover={<img alt="example"
                                                    src={i.link}/>}

                                    >
                                        {/*<Meta title={i.title} description={i.linkDescription}/>*/}
                                        <p className="title">{i.title} </p>
                                        <p>Version: 2022</p>
                                        <p>Price: 3.000.000.000$</p>
                                        <p onClick={() => openInNewTab(i.linkDescription)}
                                            className="link"
                                        >More info</p>
                                    </Card>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    );
}
