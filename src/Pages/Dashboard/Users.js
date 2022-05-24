import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserTable from './UserTable';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
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
            <h2 className='text-4xl my-5 font-semibold text-primary'>All users here</h2>
            <div class="overflow-x-auto">
                <table class="table table-normal w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th> Admin Panel</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserTable
                                index={index}
                                key={user._id}
                                refetch={refetch}
                                user={user}
                            ></UserTable>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;