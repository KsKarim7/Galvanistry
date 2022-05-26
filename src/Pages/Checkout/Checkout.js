import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import Order from './Order';

const Checkout = () => {
    const { id } = useParams();

    // const [product, setProduct] = useState({})
    // console.log(product)

    const url = ` https://tranquil-retreat-22940.herokuapp.com/products/${id}`;

    const { data: item, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }



    // useEffect(() => {
    //     const url = ` https://tranquil-retreat-22940.herokuapp.com/products/${id}`;

    //         fetch(url)
    //             .then(res => res.json())
    //             .then(data => setProduct(data))
    //     }, [id])
    return (
        <div className='flex  justify-center'>

            <div>
                <div class="card mt-16 w-100 lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={item.img} alt={item.name} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{item.name}</h2>
                        <p>Available Quantity : {item.available}</p>
                        <p>Avail Warranty For : {item.warranty}year</p>
                        <p>Minimum Order Quantity  : {item.minimum} </p>
                        <p>Each Quantity Price : ${item.price}</p>
                        <p>For Queries Mail us at: {item.email}</p>
                        <p>Visit Us: {item.address}</p>
                        {/* <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div> */}
                    </div>
                </div>
                <Order item={item}></Order>
            </div>


        </div>
    );
};

export default Checkout;