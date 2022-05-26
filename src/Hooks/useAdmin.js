import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [aLoading, setALoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(` https://tranquil-retreat-22940.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },

            })
                .then(res => res.json())
                .then(data => {

                    setAdmin(data.admin);
                    setALoading(false)
                })
        }
    }, [user])
    return [admin, aLoading]
}
export default useAdmin;