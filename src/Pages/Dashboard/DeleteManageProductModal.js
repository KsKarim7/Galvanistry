import React from 'react';
import { toast } from 'react-toastify';

const DeleteManageProductModal = ({ deleteManageProduct, refetch, setDeleteManageProduct }) => {
    const { name, _id } = deleteManageProduct

    const handleDelete = () => {
        fetch(` https://tranquil-retreat-22940.herokuapp.com/manage/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.warning(`Deleted ${name} successfully`)
                    setDeleteManageProduct(null)
                    refetch()
                }
            })
    }
    return (
        <div>




            <input type="checkbox" id="delete-product-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-primary">Are you sure to remove {name} from our inventory</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className="btn btn-secondary   ">Delete Product</button>
                        <label for="delete-product-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteManageProductModal;