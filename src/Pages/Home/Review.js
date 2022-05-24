import { async } from '@firebase/util';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DisplayReviews from './DisplayReviews';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const Review = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/user')
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <p className='text-4xl  my-14 text-secondary text-center'> Some words from our beloved customers :</p>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {/* <SwiperSlide>
            <h2>Swiper</h2>
        </SwiperSlide> */}

                {/* {
                    reviews.map((review) => (
                        <SwiperSlide
                            key={review._id}

                        >
                            <div><h2>{review.Name}</h2></div>
                        </SwiperSlide>
                    ))
                } */}
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Review;