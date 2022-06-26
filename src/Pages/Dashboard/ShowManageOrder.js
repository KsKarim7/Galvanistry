import React from 'react';

const ShowManageOrder = ({ order, index }) => {
    const { myname, name, quantity, email, cost } = order

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{myname}</td>
            <td>{email}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td><div className='grid grid-cols-2 place-content-around'>
                {/* <div> */}
                {/* {!order.paid && <label for="delete-modal" className="btn btn-circle   btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </label>} */}
                {/* {order.paid && <p > <span className='font-bold text-xl text-neutral'>Transaction Id:</span>  <br /> <span className='text-secondary'>{order.transactionId}</span></p>} */}


                {/* </div> */}
                {(order.cost && !order?.paid) && <button className="btn mt-1 mr-4 btn-sm h-10 btn-outline btn-primary">Unpaid</button>}
                {(order.price && order.paid) && <div>
                    <span className="btn mt-1 mx-2 btn-sm h-10  btn-neutral">Pending</span>

                </div>}

            </div></td>

        </tr>

    );
};

export default ShowManageOrder;