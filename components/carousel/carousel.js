
import SideText from './vacatures/sidetext';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import style from './styles.module.css';

const tanzania = '../images/tanzania.jpg';
const surfboy = '../images/surfboy.png';

//input data from MongoDB
//import { connectToDatabase } from '../../util/mongodb'



const items = 
    [
        <div className={style.sidetext}>
            <div className="item" data-value="1">
                <img
                    className={style.img}
                    loading='lazy'
                    src={surfboy} alt='surfboy' />
            </div>
            <SideText />
        </div>
        ,
        <div className={style.sidetext}>
            <div className="item" data-value="1">
                <img
                    className={style.img}
                    loading='lazy'
                    src={tanzania} alt='tanzania' />
            </div>
            <SideText />
        </div>
        ,
        <div className={style.sidetext}>
            <div className="item" data-value="1">
                <img className={style.img}
                    src='https://images.unsplash.com/photo-1587336674521-35e6e2cc7917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop' />
            </div>
            <SideText />
        </div>
        ,
        <div className={style.sidetext}>
            <div className="item" data-value="1">
                <img className={style.img}
                    loading='lazy'
                    src='https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
            </div>
            <SideText />
        </div>
        ,
        <div className={style.sidetext}>
            <div className="item" data-value="1">
                <img className={style.img}
                    loading='lazy'
                    src='https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
            </div>
            <SideText />
        </div>
        ,
        <div className={style.sidetext}>
            <div className="item" data-value="1">
                <img className={style.img}
                    src='https://images.unsplash.com/photo-1549996647-190b679b33d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
            </div>
            <SideText />
        </div>
    ]
    ;


const SlideShow = () => {
    return (
        <AliceCarousel
            autoPlay
            autoPlayStrategy="default"
            autoPlayInterval={4000}
            animationDuration={4000}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls={false}
            disableButtonsControls
            items={items}
        />)
}


export default SlideShow;