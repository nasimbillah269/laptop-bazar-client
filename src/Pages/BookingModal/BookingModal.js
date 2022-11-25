import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext);
    const { productName, resalePrice, image } = product;

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const productName = form.productName.value;
        const image = form.image.value;
        const resalePrice = form.resalePrice.value;
        const location = form.location.value;
        console.log(name,
            email,
            phone,
            productName,
            resalePrice,
            image,
            location);

        const booking = {
            name,
            email,
            phone,
            productName,
            resalePrice,
            image,
            location

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Successfully! ');
                    setProduct(null);
                }
            })

    }



    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleBooking} className='grid gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input w-full input-bordered" />
                        <input name="productName" type="text" defaultValue={productName} disabled className="input w-full input-bordered" />
                        <input name="image" type="text" defaultValue={image} disabled className="input w-full input-bordered" />
                        <input name="resalePrice" type="text" defaultValue={resalePrice} disabled className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Your Phone" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Your location" className="input w-full input-bordered" />
                        <br />
                        <input type="submit" className='btn btn-accent w-full ' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;