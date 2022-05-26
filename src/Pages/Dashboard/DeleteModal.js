import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteOrder, setDeleteOrder }) => {
    const { name, _id } = deleteOrder;

    const handleDelete = () => {
        fetch(` https://tranquil-retreat-22940.herokuapp.com/order/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.warning(`Deleted ${name} successfully`)
                    setDeleteOrder(null)
                }
            })
    }
    return (
        <div>

            {/* <label for="delete-modal" class="btn modal-button">open modal</label> */}


            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-primary"> To delete {name} from your orders press "Confirm"!</h3>

                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn   btn-primary">
                            Confirm
                        </button>
                        <label for="delete-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;