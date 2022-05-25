import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteManageProductModal from './DeleteManageProductModal';
import ShowManageProducts from './ShowManageProducts';

const ManageProducts = () => {
    const [deleteManageProduct, setDeleteManageProduct] = useState(null)
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
            <h2 className='text-4xl text-secondary my-10 font-semibold'>Products Management</h2>
            <div className='grid grid-cols-4  gap-4'>

                {
                    manage.map(product =>
                        < ShowManageProducts
                            key={manage._id}
                            refetch={refetch}
                            product={product}
                            setDeleteManageProduct={setDeleteManageProduct}
                        ></ShowManageProducts>
                    )
                }
            </div>

            {
                deleteManageProduct && <DeleteManageProductModal
                    refetch={refetch}
                    deleteManageProduct={deleteManageProduct}
                    setDeleteManageProduct={setDeleteManageProduct}
                ></DeleteManageProductModal>
            }
        </div >
    );
};

export default ManageProducts;