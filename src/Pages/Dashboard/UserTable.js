import React from 'react';
import { toast } from 'react-toastify';

const UserTable = ({ user, index, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken ')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You have to be an admin to make user admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('New Admin added!')
                }
            })
    }
    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role !== 'admin' && <button onClick={makeAdmin} class="btn  btn-sm h-10 btn-outline btn-primary">Make Admin</button>}
            </td>
            <td className='text-center'><button class="btn btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>
        </tr>
    );
};

export default UserTable;