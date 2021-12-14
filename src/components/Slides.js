import React, {useState, useEffect} from "react";

function Slides() {
    const photos = [
        {
            id: 'p1',
            title: 'photo1',
            URL: 'https://www.ikyf.org/images/index_s/main06.jpg'
        },
        {
            id: 'p2',
            title: 'photo2',
            URL: 'https://www.ikyf.org/images/index_s/main05.jpg'
        },
        {
            id: 'p3',
            title: 'photo3',
            URL: 'https://www.ikyf.org/images/index_s/main07.jpg'
        }  
    ]

    // return (

    // );
}

const carousel = function(slides = [], speed = 3000, transitionSpeed = 500, slideWidth = 300, slideHeight = 300, autoScroll, manualMode) {
    if (slides.length < 2) {
        console.log("please add more slides");
        return null;
    }

    const [visibleSlide, setVisibleSlide] = useState(1);
    
}

export default Slides