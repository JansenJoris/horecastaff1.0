
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import style from './styles.module.css';

const tanzania = '../images/tanzania.jpg';
const surfboy = '../images/surfboy.png';



const items =
    [
        <div>
            <div className="item" data-value="1">
                <img
                    className={style.img}
                    loading='lazy'
                    src='https://images.unsplash.com/photo-1597048591230-7fb2c9cc2331?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1624&q=80' alt='wine' />
            </div>
        </div>
        ,
        <div>
            <div className="item" data-value="1">
                <img
                    className={style.img}
                    loading='lazy'
                    src='https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80' alt='tapas' />
            </div>
        </div>
        ,
        <div>
            <div className="item" data-value="1">
                <img className={style.img}
                    src='https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
                    alt='sante' />
            </div>
        </div>
        ,
        <div>
            <div className="item" data-value="1">
                <img className={style.img}
                    loading='lazy'
                    src='https://images.unsplash.com/photo-1616781434243-b972f0c687b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' alt='bartender' />
            </div>
        </div>
        ,
        <div>
            <div className="item" data-value="1">
                <img className={style.img}
                    loading='lazy'
                    src='https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
            </div>
        </div>
        ,
        <div>
            <div className="item" data-value="1">
                <img className={style.img}
                    src='https://images.unsplash.com/photo-1549996647-190b679b33d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
            </div>
        </div>
        ,
        <div>
            <div className="item" data-value="1">
                <img className={style.img}
                    src='https://images.unsplash.com/photo-1618832116225-21d6821dab33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNoZWVzZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                    alt="holland cheese" />
            </div>
        </div>
    ]
    ;


const SlideShow = () => {
    return (
        <AliceCarousel
            autoPlay
            autoPlayStrategy="default"
            autoPlayInterval={2000}
            animationDuration={4000}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls={true}
            disableButtonsControls
            items={items}
        />)
}


export default SlideShow;