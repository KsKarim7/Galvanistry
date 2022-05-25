import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DisplayReviews from './DisplayReviews';




const Review = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/user')
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <p className='text-4xl  my-14 text-secondary text-center'> Some words from our beloved customers :</p>


        </div>
    );
};

export default Review;