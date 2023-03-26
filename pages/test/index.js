import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const arr = [1,2,3,4,5]
const test = () => {
    const settings = {
        customPaging: function(i) {
            console.log(i, 'check')
            return (
                <a>
                    {i}
                </a>
            );
        },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="test">

                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                </Slider>
        </div>
    )
}
export default test