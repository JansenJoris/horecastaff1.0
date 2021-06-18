/* 
//css styles
import style from "./styles.module.css";

let randomSlide = [
    <div className={style.slide}>
        <div className={style.border}>
            <img
                className={style.img}
                src='https://images.unsplash.com/photo-1587336674521-35e6e2cc7917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop' />
        </div>
    </div>,
    <div className={style.slide}>
        <div className={style.border}>
            <img
                className={style.img}
                src='https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80' />
        </div>
    </div>,
    <div className={style.slide}>
        <div className={style.border}>
            <img
                className={style.img}
                src='https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
        </div>
    </div>,
    <div className={style.slide}>
        <div className={style.border}>
            <img
                className={style.img}
                src='https://images.unsplash.com/photo-1549996647-190b679b33d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
        </div>
    </div>,
    <div className={style.slide}>
        <div className={style.border}>
            <img
                className={style.img}
                src='https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
        </div>
    </div>,
]


function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

var oneImage = shuffle(randomSlide)



const SlideShow = () => {

    return (
        <div className={style.container}>
            <div className={style.slider}>
                <div className={style.slideTrack}>
                    {oneImage}
                </div>
            </div>

        </div>
    )
}

const Carousel = () => {
    return (
        <SlideShow />
    )
}


export default Carousel;
 */

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import style from './styles.module.css'

const items = [
    <div className="item">
        <img className={style.img}
            src='https://images.unsplash.com/photo-1587336674521-35e6e2cc7917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop' />
    </div>
    ,
    <div className="item" data-value="1">
        <img className={style.img}
            src='https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
    </div>
    ,
    <div className="item" data-value="1">
        <img className={style.img}
            src='https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
    </div>
    ,
    <div className="item" data-value="1">
        <img className={style.img}
            src='https://images.unsplash.com/photo-1549996647-190b679b33d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
    </div>
];


const SlideShow = () => (
    <AliceCarousel
        autoPlay
        autoPlayStrategy="default"
        autoPlayInterval={3000}
        animationDuration={5000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls={false}
        disableButtonsControls
        items={items}
    />
)


export default SlideShow;