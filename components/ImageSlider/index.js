import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme, Divider } from '@geist-ui/react';

import React from 'react';




const data = [
    {
        img: "https://staticimg.titan.co.in/Skinn/Catalog/FW03PFC_2.jpg"
    },
    {
        img: "https://staticimg.titan.co.in/Skinn/Catalog/FW03PFC_1.jpg"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQplu70dSFKmcgD7oyLnXa1jC67xYKn9A6_ag&usqp=CAU"
    },
]



export default function ImageSlider({
    images,
}) {

    const { palette } = useTheme();

    const [activeImg, setActiveImg] = React.useState(0);
    const sliderContainerRef = React.useRef(null)

    const scrollToImage = (index) => {

        sliderContainerRef.current.scroll({
            left: index * sliderContainerRef.current.clientWidth
        })
        setActiveImg(index)
    }

    const handleScroll = (e) => {
        var activeIndex = Math.round(sliderContainerRef.current.scrollLeft / sliderContainerRef.current.clientWidth)
        if (activeIndex != activeImg) {
            setActiveImg(activeIndex)
        }
    }

    return <div style={{ position: "relative", width:"100%" }}>
        <style jsx>{`
        .carousel {
            overflow-x: auto;
          white-space: nowrap;
          display: flex;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        
          width: 100%;
        }
        
        ::-webkit-scrollbar {
            width: 0px;
            height: 0px
        }
        
        .carousel-item {
            min-width: 100%;
          min-height: 100%;
          scroll-snap-align: center;
        }
        
        `}

        </style>
        <div ref={sliderContainerRef} onScroll={(e) => handleScroll(e)} className="carousel" >
            {
                images?.map((item, id) => <div key={id} className='carousel-item' id="carousel-1">
                    <Image width="100%" height="560px" src={item.url} />
                </div>)
            }
        </div>
        <Divider />
        <div style={{ display: "flex", position: "relative", maxWidth: '100%', flexDirection: "row" }}>
            {
                images?.map((item, id) => <div onClick={() => scrollToImage(id)} style={{ cursor: "pointer", border: activeImg == id ? `1px solid ${palette.accents_8}` : '1px solid transparent', }} key={id} id="carousel-1">
                    <Image style={{ objectPosition: 'center center', objectFit: "scale-down" }} width="120px" height="120px" src={item.url} />
                </div>)
            }
        </div>
        <Divider />
       
    </div>
}