import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DisplayReviews from './DisplayReviews';
import ShowReview from './ShowReview';




const Review = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch(' https://tranquil-retreat-22940.herokuapp.com/user')
        .then(res => res.json()))
    console.log(reviews)

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <p className='text-4xl font-semibold  my-14 text-secondary text-center'> Some words from our beloved customers :</p>
            <div className='grid justify-items-center lg:grid-cols-3 sm:grid-cols-2 sm:max-h-max  gap-4 my-28'>

                {
                    reviews.map(rate => <ShowReview
                        key={rate._id}
                        rate={rate}
                    ></ShowReview>)
                }
            </div>

        </div>
    );
};

export default Review;