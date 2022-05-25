import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ShowManageProducts from './ShowManageProducts';

const ManageProducts = () => {

    const { data: manage, isLoading, refetch } = useQuery('manage', () => fetch('http://localhost:5000/manage', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-4xl text-secondary my-8 font-semibold'>Manage Products here  </h2>
            <div className='grid grid-cols-4  gap-4'>

                {
                    manage.map(product =>
                        <ShowManageProducts
                            key={manage._id}
                            refetch={refetch}
                            product={product}
                        ></ShowManageProducts>
                    )
                }
            </div>


        </div>
    );
};

export default ManageProducts;